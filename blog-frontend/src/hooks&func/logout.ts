export  function Logoutfunc(nav){

    localStorage.removeItem("token")
    localStorage.removeItem("logedin")
nav("/signin")
  }