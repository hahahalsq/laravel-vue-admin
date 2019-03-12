<?php

namespace App\Http\Controllers\Api;

use App\Http\Repository\UserRepository;
use App\Http\Requests\StoreUserRequest;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    /**
     * Create a new AuthController instance.
     * 要求附带email和password（数据来源users表）
     *
     * @return void
     */
    public function __construct()
    {
        // 这里额外注意了：官方文档样例中只除外了『login』
        // 这样的结果是，token 只能在有效期以内进行刷新，过期无法刷新
        // 如果把 refresh 也放进去，token 即使过期但仍在刷新期以内也可刷新
        // 不过刷新一次作废
        $this->middleware('auth:api', ['except' => ['login']]);
        // 另外关于上面的中间件，官方文档写的是『auth:api』
        // 但是我推荐用 『jwt.auth』，效果是一样的，但是有更加丰富的报错信息返回
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $list = User::paginate(11);
        return $this->out(200, $list);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return $this->out(200, ['method' => 'create']);
    }

    /**
     * Store a newly created resource in storage.
     * 新增入库操作
     *
     * @param  StoreUserRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserRequest $request)
    {
        // 会出现 Unknown column 'guid' in 'field list' 不存在的字段入库报错问题
        // $rs = User::insert($request->all());
        $input = $request->all();
        $model = new User($input);
        if ($model->save()) {

            $roles = $request['roles']; // 获取输入的角色字段
            // 检查是否某个角色被选中
            if (isset($roles)) {
                foreach ($roles as $role) {
                    $role_r = Role::where('id', '=', $role)->firstOrFail();
                    $model->assignRole($role_r); // Assigning role to user
                }
            }

            return $this->out(200, ['data' => ['id' => $model->id]]);
        } else {
            return $this->out(4000);
        }

    }

    /**
     * Display the specified resource.
     * 展示某个详情数据
     *
     * @param User $User
     *
     * @return \Illuminate\Http\Response
     */
    public function show(User $User)
    {
        return $this->out(200, $User);
    }

    /**
     * Show the form for editing the specified resource.
     * 编辑展示数据
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = User::findOrFail($id);

        $roles = Role::get(); // 获取所有角色
        return $this->out(200, array_merge($data, $roles));
    }

    /**
     * Update the specified resource in storage.
     * 更新数据
     *
     * @param  StoreUserRequest $request
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(StoreUserRequest $request, $id)
    {
        $user = User::findOrFail($id);
        // 新增角色操作
        $input = $request->only(['name', 'email', 'password']); // 获取 name, email 和 password 字段
        $roles = $request['roles']; // 获取所有角色

        if ($user->fill($input)->save()) {
            if (isset($roles)) {
                $user->roles()->sync($roles);  // 如果有角色选中与用户关联则更新用户角色
            } else {
                $user->roles()->detach(); // 如果没有选择任何与用户关联的角色则将之前关联角色解除
            }

            return $this->out(200, ['data' => ['id' => $id]]);
        } else {
            return $this->out(4000);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy($id)
    {
        if (User::findOrFail($id)->delete()) {
            $data = ['msg' => '删除成功', 'errno' => 0];
        } else {
            $data = ['msg' => '删除失败', 'errno' => 2];
        }
        return $this->out(200, $data);
    }


    /**
     * 修改密码操作
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function password(Request $request)
    {
        $input = $request->only('old_pwd', 'password', 'repassword');
        $result = UserRepository::getInstent()->changePassword($input);

        return $this->out($result['code']);
    }
}
