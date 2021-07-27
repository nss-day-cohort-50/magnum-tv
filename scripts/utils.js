export const findShowType = (showObject, showTypesArray) => {
    for (const type of showTypesArray) {
        if (showObject.showTypeId === type.id) {
            return type
        }
    }

    return null
}
