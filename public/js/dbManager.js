const form = document.getElementById('form')
//const error = document.getElementById('error')
const db = firebase.firestore();

const addUsers = (user, email) => {
    db.collection("users").add({
        user: user,
        email: email,
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            // clearErrors()
            form.reset()
            modal.classList.remove('modal--show')
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

// const showErrors = (msg) => {
//     error.textContent = msg
// }
// const clearErrors = () => {
//     error.textContent = ''
// }


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = e.target.user.value
    const email = e.target.email.value

    if (user != '' && email != '') {
        let errors = 0

        db.collection("users").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().email == email) {
                    errors++
                    return
                }
            })
            if (errors == 0) {
                addUsers(user, email)

            }
        });

    }

})