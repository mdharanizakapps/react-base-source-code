export const redirectToPage = (pageId: string, loggedIn = true) => {
  if (!loggedIn) {
    localStorage.removeItem('session_id');
  }
  window.location.href = pageId; // Redirect to login page
};
