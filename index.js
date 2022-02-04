window.onload = function(e){
    console.log('loaded v5s')

    var button = document.createElement("input")
    button.setAttribute("type", "button")
    button.setAttribute("name", "donation")
    button.setAttribute("value", "Enough to get me a Thor bottle")
    button.setAttribute("style", "border-style:inset;")
    button.setAttribute("class", "u-btn u-button-style u-custom-item u-hover-palette-1-dark-3 u-palette-1-base u-btn-1")
    button.addEventListener("click", clickTheDonationFunction)
    document.getElementsByClassName("u-container-layout-1")[0].appendChild(button)

    var button = document.createElement("input")
    button.setAttribute("type", "button")
    button.setAttribute("name", "donation")
    button.setAttribute("value", "Enough to get me a Cooler")
    button.setAttribute("style", "border-style:inset;")
    button.setAttribute("class", "u-btn u-button-style u-custom-item u-hover-palette-1-dark-3 u-palette-1-base u-btn-2")
    button.addEventListener("click", clickTheDonationFunction)
    document.getElementsByClassName("u-container-layout-2")[0].appendChild(button)

    var button = document.createElement("input")
    button.setAttribute("type", "button")
    button.setAttribute("name", "donation")
    button.setAttribute("value", "Enough to get me a Bose Speaker")
    button.setAttribute("style", "border-style:inset;")
    button.setAttribute("class", "u-btn u-button-style u-custom-item u-hover-palette-1-dark-3 u-palette-1-base u-btn-3")
    button.addEventListener("click", clickTheDonationFunction)
    document.getElementsByClassName("u-container-layout-3")[0].appendChild(button)


    var nameField = document.createElement("input")
    nameField.setAttribute("type", "text")
    nameField.setAttribute("placeholder", "Name")
    nameField.setAttribute("id", "name-6797")
    nameField.setAttribute("name", "name")
    nameField.setAttribute("class", "u-border-1 u-border-grey-30 u-input u-input-rectangle")
    nameField.addEventListener("click", enteringFormInfo)
    document.getElementsByClassName("u-form-group u-form-name u-label-none u-form-group-1")[0].appendChild(nameField)

    var emailField = document.createElement("input")
    emailField.setAttribute("type", "email")
    emailField.setAttribute("placeholder", "Email")
    emailField.setAttribute("id", "email-6797")
    emailField.setAttribute("name", "email")
    emailField.setAttribute("class", "u-border-1 u-border-grey-30 u-input u-input-rectangle")
    emailField.addEventListener("click", enteringFormInfo)
    document.getElementsByClassName("u-form-email u-form-group u-label-none u-form-group-2")[0].appendChild(emailField)

    var button = document.createElement("input")
    button.setAttribute("type", "submit")
    button.setAttribute("value", "Submit")
    button.setAttribute("class", "u-btn u-btn-submit u-button-style")
    button.addEventListener("click", submitForm)
    document.getElementsByClassName("u-align-left u-form-group u-form-submit u-form-group-3")[0].appendChild(button)

    function clickTheDonationFunction(){
      console.log("wowza")
      selecteddonation = this
// debugger
      if(document.getElementsByClassName("u-hover-black").length>0){
          document.getElementsByClassName("u-hover-black")[0].classList.add("u-palette-1-base")
          document.getElementsByClassName("u-hover-black")[0].classList.add("u-hover-palette-1-dark-3")
          document.getElementsByClassName("u-hover-black")[0].classList.remove("u-border-2")
          document.getElementsByClassName("u-hover-black")[0].classList.remove("u-border-black")
          document.getElementsByClassName("u-hover-black")[0].classList.remove("u-none")
          document.getElementsByClassName("u-hover-black")[0].classList.remove("u-text-black")
          document.getElementsByClassName("u-hover-black")[0].classList.remove("u-text-hover-white")
          document.getElementsByClassName("u-hover-black")[0].classList.remove("u-hover-black")
        }


      this.classList.remove("u-palette-1-base")
      this.classList.remove("u-hover-palette-1-dark-3")
      this.classList.add("u-border-2")
      this.classList.add("u-border-black")
      this.classList.add("u-hover-black")
      this.classList.add("u-none")
      this.classList.add("u-text-black")
      this.classList.add("u-text-hover-white")
    }

    function enteringFormInfo(){
      console.log("wowza")
    }

    function submitForm(){
      console.log("wowza")
      document.getElementById("name-6797").value
      document.getElementById("email-6797").value
      selecteddonation.value
      var xmlHttp = new XMLHttpRequest();
          xmlHttp.open( "GET", `https://hooks.zapier.com/hooks/catch/11611749/b5l8cbh?toemail=${document.getElementById("email-6797").value}&message=heythere&smartlink=https://listings.swagrabbit.com/bn4&promocode=thisthepromo6`, false );
          xmlHttp.send( null );
          // return xmlHttp.responseText;
      alert("Thank you for your donation")
      window.location.reload();
    }


    // debugger
}


// u-border-2 u-border-black    u-hover-black u-none u-text-black u-text-hover-white
//   u-hover-palette-1-dark-3 u-palette-1-base
