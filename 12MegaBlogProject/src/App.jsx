import conf from "./conf/conf.js"


function App() {
  console.log(conf.appwriteUrl, conf.appwriteBucketId)

  return (
    <>
      <h1>
        A blog app with appwrite
      </h1>
    </>
  )
}

export default App
