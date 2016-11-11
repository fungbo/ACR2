import * as actions from './index';
import * as types from '../constants/ActionTypes';

const application = {
  name: 'Harden',
  mobile: '18912345678',
  reason: 'interview',
  start: new Date(2016, 11, 10, 20, 0, 0),
  end: new Date(2016, 11, 11, 20, 0, 0)
};

describe('login actions', () => {
  it('requestQR should create REQUEST_QR action', () => {
    expect(actions.requestQR(application)).toEqual({
      type: types.REQUEST_QR,
      application: {
        ...application
      }
    });
  });

  it('receiveUUID should create RECEIVE_UUID action', () => {
    expect(actions.receiveUUID('92329D39-6F5C-4520-ABFC-AAB64544E172')).toEqual({
      type: types.RECEIVE_UUID,
      uuid: '92329D39-6F5C-4520-ABFC-AAB64544E172'
    });
  });

  it('pollResult should crate POLL_RESULT action', () => {
    expect(actions.pollResult()).toEqual({
      type: types.POLL_RESULT
    });
  });

  it('receiveQRSuccess should create RECEIVE_QR_SUCCESS', () => {
    expect(actions.receiveQRSuccess('qr code')).toEqual({
      type: types.RECEIVE_QR_SUCCESS,
      qr: 'qr code'
    });
  });

  it('receiveQRFailure should create RECEIVE_QR_FAILURE', () => {
    expect(actions.receiveQRFailure('reason')).toEqual({
      type: types.RECEIVE_QR_FAILURE,
      failureReason: 'reason'
    });
  });
});
