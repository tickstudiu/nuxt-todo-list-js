/**
 * Redirect user to home page if they not logged in
 */
 export default ({ store, redirect }) => {
  if (store.state.auth.isLoggedIn) {
    redirect('/')
  }
}
