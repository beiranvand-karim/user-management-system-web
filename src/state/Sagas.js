import { put, takeEvery } from "redux-saga/effects"

import {
	addUser,
	deleteUser,
	REQUEST_ADD_USER,
	REQUEST_DELETE_USER,
	REQUEST_FETCH_USERS,
} from "./actions"
import {
	sendRequestAdduser,
	requestToFetchUsers,
	requestToDeleteUser,
} from "./api"

export function* addUserManagement(action) {
	try {
		const user = yield sendRequestAdduser(action.payload)
		yield put(addUser(user))
	} catch (e) {}
}

export function* fetchUserManagement() {
	try {
		const users = yield requestToFetchUsers()
		for (let i = 0; i < users.length; i++) {
			yield put(addUser(users[i]))
		}
	} catch (e) {}
}

export function* deleteUserManagement(action) {
	try {
		const userId = action.payload
		const user = yield requestToDeleteUser(userId)
		yield put(deleteUser(user.id))
	} catch (e) {}
}

export default function* UsersSaga() {
	yield takeEvery(REQUEST_ADD_USER, addUserManagement)
	yield takeEvery(REQUEST_FETCH_USERS, fetchUserManagement)
	yield takeEvery(REQUEST_DELETE_USER, deleteUserManagement)
}
