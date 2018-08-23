

const registration = Object.create(null, {
    renderForm: {
        value: () => {
            return `
                <h3>New User Form</h3>
                <div class="registrationInputDOM">

                    <input required type="text" name="userName" class="registrationInput" id="userName" placeholder="Username"> <br>

                    <input required type="text" name="password" class="registrationInput" id="password" placeholder="Password"> <br>

                    <button id="registrationSubmitButton">Submit</button>
                </div>
            `
        }
    }
})

module.exports = registration