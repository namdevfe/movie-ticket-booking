type Props = {
  users: any
}

const UserTable = ({ users }: Props) => {
  return (
    <>
      <table className='w-full mt-6'>
        <thead className='text-left bg-primary text-white'>
          <tr>
            <th className='px-3 py-2'>#</th>
            <th className='px-3 py-2'>Email</th>
            <th className='px-3 py-2'>Username</th>
            <th className='px-3 py-2'>Created At</th>
            <th className='px-3 py-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.length > 0 &&
            users.map((user: any) => (
              <tr key={user.id}>
                <td className='px-3'>{user.id}</td>
                <td className='px-3'>{user.email}</td>
                <td className='px-3'>{user.username}</td>
                <td className='px-3'>{user.createdAt}</td>
                <td className='px-3'>Edit | Delete</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default UserTable
