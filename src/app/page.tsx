
import LoginForm from "@/components/forms/LoginForm";

// export default function Home() {
//   const [isLoading, setIsLoading] = useState<boolean>(false)
 
//   async function onSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault()
//     setIsLoading(true) // Set loading to true when the request starts
//     console.log(new FormData(event.currentTarget))
//     try {
//       const formData = new FormData(event.currentTarget)
//       const response = await fetch('/api/submit', {
//         method: 'POST',
//         body: formData,
//       })
 
//       // Handle response if necessary
//       const data = await response.json()
//       // ...
//     } catch (error) {
//       // Handle error if necessary
//       console.error(error)
//     } finally {
//       setIsLoading(false) // Set loading to false when the request completes
//     }
//   }
 
//   return (
//     <form onSubmit={onSubmit}>
//       <input type="text" name="name" />
//       <button type="submit" disabled={isLoading}>
//         {isLoading ? 'Loading...' : 'Submit'}
//       </button>
//     </form>
//   )
// }

export default function Home() {

  return (
    <main className="login">
      <LoginForm/>
    </main>
  );
}
