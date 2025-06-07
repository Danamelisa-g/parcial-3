import { Event } from './../../node_modules/chrome-trace-event/dist/trace-event.d';
import { confirmPasswordReset } from "firebase/auth";

class register extends HTMLElement{
    constructor(){
        super();
        this.attachshadow({ mode: "open" });
    }
    connectedCallback(){
        this.render();
        this.setupListeners();
    }

    setupListeners(){
        const form = this.shadowRoot?.querySelector("form");
        form?.addEventListener("submit", async (e) => {
        e.preventDeafult();

         const emailInput=this.shadowRoot?.querySelector("#email")as HTMLInputElement;
         const passwordInput=this.shadowRoot?.querySelector("#password")as HTMLInputElement;
         const ConfirmPasswordInpt=this.shadowRoot?.querySelector("#confirmPassword")as HTMLInputElement;
         const errormessage=this.shadowRoot?.querySelector("#.error-message");

         if (emailInput && passwordInput && ConfirmPasswordInpt && errormessage ){
            const email= emailInput.value.trim();
            const password = passwordInput.value.trim();
            const confirm = ConfirmPasswordInpt.value.trim();

            if(!email|| !password|| !ConfirmPasswordInpt){
                errormessage.textContent ="Complete todos los campos"
                return;
            }
            if (password !== confirm){
                 errormessage.textContent = "Las contraseñas no coinciden";
                    return;

            }
            if(password.length <8){
                errormessage.textContent="la contraseña debe de tener almenos 8 carecteres";
                return;
            }
            const submitbutton = this.shadowRoot?.querySelector("button[type='submit']") as HTMLButtonElement


            if(result.succes){
                window.history.pushState({}, "","/mainpage")
                const Event = new CustomEvent ("route-change",{
                    bubbles:true,
                    composed:true,
                    detail:[path:"/mainpage"],
                } );
                this.dispatchEvent();

            }else{
                errormessage.textContent=result.error || "errror al registrar al usuario";
                 if (submitbutton) {
                        submitbutton.disabled = false;
                        submitbutton.textContent = "Registrarse";
                    }
               }
            
           }
         });
         const loginLink = this.shadowRoot?.querySelector(".login-link");
          loginLink?.addEventListener("click", (e) => {
            e.preventDefault();
            window.history.pushState({}, "", "/login");
            const event = new CustomEvent("route-change", {
                bubbles: true,
                composed: true,
                detail: { path: "/login" },
            });
            this.dispatchEvent(event);
        });
    }
    render(){
        if(!this.shadowRoot) return;
         this.shadowRoot.innerHTML = ` 
         <style>
         :host {
            display: block;
            font-family: 'Poppins', sans-serif;
            width: 100%;
            min-height: 100vh;
            background: linear-gradient(135deg, #f5f7fa 0%,rgb(255, 255, 255) 100%);
            overflow-x: hidden;
          }

          #title {
            font-size: 20px;
            color: #333;
            font-weight: bold;
            margin: 0 0 25px 0;
            text-align: center;
          }

          .main {
            width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            box-sizing: border-box;
          }

          .from-container {
            font-family: 'Poppins', sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: white;
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            background-color: rgb(246, 245, 245);
            width: 100%;
            max-width: 600px;
            box-sizing: border-box;
          }

          .container-input {
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 90%;
            margin-top: 10px;
            margin-bottom: 30px;
          }
            .continue-btn {
            background:rgb(0, 224, 183);
            color: white;
            border: none;
            padding: 12px 24px;
            width: 70%;
            cursor: pointer;
            border-radius: 8px;
            margin-top: 15px;
            font-size: 16px;
            font-weight: 600;
            transition: all 0.3s ease;
          }

          .continue-btn:hover:not(:disabled) {
            background: rgb(21, 183, 134);
            transform: translateY(-1px);
          }

          .continue-btn:disabled {
            background: #ccc;
            cursor: not-allowed;
            transform: none;
          }

          .line {
            width: 90%;
            height: 1px;
            background-color: rgb(4, 180, 174);
            margin-top: 28px;
            margin-bottom: 15px;
          }

          .container-new-account {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
          }

          .container-new-account p {
            margin: 0;
            color: black;
            font-size: 16px;
          }

          .login-btn {
            background:rgb(36, 221, 181);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
          }

          .login-btn:hover {
            background: rgb(58, 134, 106);
          }
            </style>
             <div class="from-container">
            <h2 id="title">Registrate</h2>
            
            <div class="container-input">
              
              
            </div>

            <div class="role-selection">
              <div class="role-title">¿Cómo quieres usar Lulada?</div>
              <div class="options-container">
                <label class="option-label">
                  <input type="checkbox" class="checkbox-input" id="person-checkbox" name="userType" value="person">
                  <span class="custom-checkbox"></span>
                  Persona
                </label>
                
                <label class="option-label">
                  <input type="checkbox" class="checkbox-input" id="restaurant-checkbox" name="userType" value="restaurant">
                  <span class="custom-checkbox"></span>
                  Restaurante
                </label>
              </div>
            </div>

            <button class="continue-btn" id="continue-button" disabled>Continuar</button>
            
            <div class="line"></div>
            
            <div class="container-new-account">
              <p>¿Ya tienes una cuenta?</p>
              <button class="login-btn" id="login-button">Iniciar sesión</button>
            </div>
          </div>
        </div>
         
         
         
         `;
         
    }

}