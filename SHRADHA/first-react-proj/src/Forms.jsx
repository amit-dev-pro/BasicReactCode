function SubmitForm(event) {
    event.preventDefault()
    console.log("form was submited")
}



export default function Forms() {
    return <form onSubmit={SubmitForm}>
      
        <input placeholder="enter something"></input>
        <button>submit</button>
    </form>
}