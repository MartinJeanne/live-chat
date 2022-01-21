import { ref } from "vue"
import { projectFirestore, timestamp } from '../firebase/config'

function getCollection(collection) {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection).orderBy('createdAt')

    // snapshot est déclenché à chaque fois qu'il y a un changement dans une collection
    collectionRef.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = 'Could not fetch data'
    })
    return { documents, error }
}

export default getCollection