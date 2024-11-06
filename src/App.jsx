import Profile from './components/Profile'

export default function App() {
  return (
    <div>
      <Profile avatar={'./img.jpg}'} name={'name'} bio={'Full-stack javascript developer at Acme Inc.'} phone={'+5585985698745'} email={'isabelequinto@gmail.com'}/>
    </div>
  )
}