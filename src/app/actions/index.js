import * as types from '../constants/ActionTypes';

export function requestQR(application) {
  return {type: types.REQUEST_QR, application};
}

export function receiveUUID(uuid) {
  return {type: types.RECEIVE_UUID, uuid};
}

export function pollResult() {
  return {type: types.POLL_RESULT};
}

export function receiveQRSuccess(qr) {
  return {type: types.RECEIVE_QR_SUCCESS, qr};
}

export function receiveQRFailure(failureReason) {
  return {type: types.RECEIVE_QR_FAILURE, failureReason};
}
