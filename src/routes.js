import Home from './routes/Home.svelte'
import Profile from './routes/Profile.svelte'
import NotFound from './routes/NotFound.svelte'

let routes = {
    '/': Home,
    '/profile/:first/:last': Profile,
    '*': NotFound
}
export default routes
