
export const SAVE_NEW_CODE = "SAVE_NEW_CODE";

export const saveNewCode = (code) =>{
  return {
    type: SAVE_NEW_CODE,
    payload: code
  }
};
