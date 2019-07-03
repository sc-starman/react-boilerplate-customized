
export const actionState = {
    PENDING: "_PENDING",
    FULFILLED: "_FULFILLED",
    REJECTED: "_REJECTED",
}

export const createActionState = (type, actionType) => {
    switch (actionType) {
        case actionState.FULFILLED:
            return `${type}${actionState.FULFILLED}`
        case actionState.REJECTED:
            return `${type}${actionState.REJECTED}`
        default:
            return `${type}${actionState.PENDING}`
    }
}