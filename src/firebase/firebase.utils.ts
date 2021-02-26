// Get doc data and merge doc.id
export const getDocData = <T>(doc: any): T | null => {
  return doc.exists ? { id: doc.id, ...doc.data() } : null
}

// Get array of doc data from collection
export const getCollectionData = <T>(collection: any): T[] => {
  return collection.docs.map(getDocData)
}

// Read ids from collection
export const readIds = async <T>(collection: any, ids: string[]): Promise<T[]> => {
  const reads = ids.map((id) => collection.doc(id).get())
  const result = await Promise.all<T>(reads)
  return result.map<T>(getDocData)
}
