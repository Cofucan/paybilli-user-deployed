import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Onboarding from "../pages/Onboarding";
import { useSearchParams } from "react-router-dom";

const initialState = {
  loggedIn: checkLoggedIn(),
  darkMode: true,
  token: "",
  loading: false,
  intentLoading: false,
  balanceLoading: false,
  showField: false,
  submitLoading: false,
  getRoadmapByIdLoading: false,
  modalLoading: false,
  error: false,
  success: false,
  rememberMe: false,
  token: "",
  allSubscriptions: [],
  subscriptionState: "inactive",
  userSubscriptionStatus: {},
  userInfo: {},
  notes: [],
  onboarding: {},
  openBets: [],
  pendingBets: [],
  dataList: [],
  betTypes: [],
  airtimeOptions: [],
  intent: {},
  balance: [],
  userEvents: [],
};

const sessionStoragetoken = sessionStorage.getItem("token");

const baseUrl = "https://paybilli-api-16f195c5b3f3.herokuapp.com";

function checkLoggedIn() {
  // const sessionStoragetoken = sessionStorage.getItem("token");

  const sessionStoragetokenNew = sessionStorage.getItem("token");
  if (sessionStoragetokenNew) return true;
  else return false;
}
initialState.loggedIn = checkLoggedIn();
export const userLogin = createAsyncThunk(
  "userLogin",
  async (data, thunkAPI) => {
    try {
      let response = await fetch(`${baseUrl}/account/login/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const registerUser = createAsyncThunk(
  "registerUser",
  async (data, thunkAPI) => {
    try {
      let response = await fetch(`${baseUrl}/account/register/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const accountCheck = createAsyncThunk(
  "accountCheck",
  async (data, thunkAPI) => {
    try {
      let response = await fetch(`${baseUrl}/account/check/`, {
        method: "POST",
        body: JSON.stringify(data.data),
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "forgotPassword",
  async (data, thunkAPI) => {
    try {
      let response = await fetch(`${baseUrl}/account/reset-password/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        toast.success("OTP sent to  your email address.");
        res.json()
      });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "verifyEmail",
  async (data, thunkAPI) => {
    try {
      let response = await fetch(`${baseUrl}/account/verify-token/`, {
        method: "POST",
        body: JSON.stringify(data.data),
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${sessionStoragetoken}`,
        },
      }).then((res) => res.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const setPassword = createAsyncThunk(
  "setPassword",
  async (data, thunkAPI) => {
    try {
      let response = await fetch(`${baseUrl}/account/set-password/`, {
        method: "POST",
        body: JSON.stringify(data.data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data?.token}`,
        },
      }).then((res) => res.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const sendVerificationCode = createAsyncThunk(
  "sendVerificationCode",
  async (token, thunkAPI) => {
    try {
      let response = await fetch(`${baseUrl}/account/resend-verify-token/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStoragetoken}`,
        },
      }).then((res) => res.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "updateProfile",
  async (token, thunkAPI) => {
    try {
      let response = await fetch(`${baseUrl}/account/user-details/`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${sessionStoragetoken}`,
        },
        body: JSON.stringify(data.data),
      }).then((res) => res.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const kycVerification = createAsyncThunk(
  "kycVerification",
  async (data, thunkAPI) => {
    try {
      let response = await fetch(`${baseUrl}/account/kyc-verification/`, {
        method: "POST",
        body: JSON.stringify(data.kyc),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStoragetoken}`,
        },
      }).then((res) => res.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const setPin = createAsyncThunk("setPin", async (data, thunkAPI) => {
  try {
    let response = await fetch(`${baseUrl}/account/set-pin/`, {
      method: "POST",
      body: JSON.stringify(data.data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStoragetoken}`,
      },
    }).then((res) => res.json());
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(true);
  }
});

export const getOpenBets = createAsyncThunk(
  "getOpenBets",
  async (token, thunkAPI) => {
    try {
      let response = await fetch(`${baseUrl}/events/user/?status=open`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStoragetoken}`,
        },
      }).then((res) => res?.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const getPendingBets = createAsyncThunk(
  "getPendingBets",
  async (token, thunkAPI) => {
    try {
      let response = await fetch(`${baseUrl}/events/user/?status=pending`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStoragetoken}`,
        },
      }).then((res) => res.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const getDataList = createAsyncThunk(
  "getDataList",
  async (data, thunkAPI) => {
    console.log(data);
    try {
      let response = await fetch(`${baseUrl}/wallet/data-variation-code/${data}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStoragetoken}`,
        },
      }).then((res) => res.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const getTvList = createAsyncThunk(
  "getTvList",
  async (data, thunkAPI) => {
    console.log(data);
    try {
      let response = await fetch(`${baseUrl}/wallet/tv-variation-code/${data}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStoragetoken}`,
        },
      }).then((res) => res.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const setNewPin = createAsyncThunk("setNewPin", async (data, thunkAPI) => {
  try {
    let response = await fetch(`${baseUrl}/account/set-pin/`, {
      method: "POST",
      body: JSON.stringify(data.data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStoragetoken}`,
      },
    }).then((res) => res.json());
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(true);
  }
});

export const deactivateAccount = createAsyncThunk("deactivateAccount", async (data, thunkAPI) => {
  try {
    let response = await fetch(`${baseUrl}/account/deactivate-account/`, {
      method: "POST",
      body: JSON.stringify(data.data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStoragetoken}`,
      },
    }).then((res) => res.json());
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(true);
  }
});

export const getAllEventTypes = createAsyncThunk(
  "getAllEventTypes",
  async (data, thunkAPI) => {
    try {
      let response = await fetch(`${baseUrl}/events/event-types/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStoragetoken}`,
        },
      }).then((res) => res.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
    }
  }
);


export const placeBet = createAsyncThunk("placeBet", async (data, thunkAPI) => {
  try {
    let response = await fetch(`${baseUrl}/events/user/${data?.details?.id}/join/`, {
      method: "POST",
      body: JSON.stringify(data.dataInfo),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStoragetoken}`,
      },
    }).then((res) => res.json());
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(true);
  }
});


export const addEvent = createAsyncThunk("addEvent", async (data, thunkAPI) => {
  try {
    let response = await fetch(`${baseUrl}/events/user/`, {
      method: "POST",
      body: JSON.stringify(data.data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStoragetoken}`,
      },
    }).then((res) => res.json());
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(true);
  }
});

export const airtimePayment = createAsyncThunk("airtimePayment", async (data, thunkAPI) => {

  try {
    let response = await fetch(`${baseUrl}/wallet/airtime-recharge/`, {
      method: "POST",
      body: JSON.stringify(data.dataInfo),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStoragetoken}`,
      },
    }).then((res) => res.json());
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(true);
  }
});

export const dataPayment = createAsyncThunk("dataPayment", async (data, thunkAPI) => {

  try {
    let response = await fetch(`${baseUrl}/wallet/data-purchase/`, {
      method: "POST",
      body: JSON.stringify(data.dataInfo),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStoragetoken}`,
      },
    }).then((res) => res.json());
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(true);
  }
});

export const inviteBettor = createAsyncThunk("inviteBettor", async (data, thunkAPI) => {
  try {
    let response = await fetch(`${baseUrl}/events/invite/`, {
      method: "POST",
      body: JSON.stringify(data.data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStoragetoken}`,
      },
    }).then((res) => res.json());
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(true);
  }
});

export const generateIntent = createAsyncThunk(
  "generateIntent",
  async (data, thunkAPI) => {
    try {
      let response = await fetch(`${baseUrl}/payment/payment-intents/`, {
        method: "POST",
        body: JSON.stringify(data.data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStoragetoken}`,
        },
      }).then((res) => res.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const getAirtimeOptions = createAsyncThunk(
  "getAirtimeOptions",
  async (token, thunkAPI) => {
    try {
      let response = await fetch(`${baseUrl}/wallet/airtime-options/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStoragetoken}`,
        },
      }).then((res) => res.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const getWalletBalance = createAsyncThunk(
  "getWalletBalance",
  async (data, thunkAPI) => {
    try {
      let response = await fetch(`${baseUrl}/wallet/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStoragetoken}`,
        },
      }).then((res) => res.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

export const getUserCreatedEvents = createAsyncThunk(
  "getUserCreatedEvents",
  async (data, thunkAPI) => {
    try {
      let response = await fetch(
        `${baseUrl}/events/user/?user_created=true`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${sessionStoragetoken}`,
          },
        }
      ).then((res) => res.json());
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(true);
    }
  }
);

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.loggedIn = false;
      state.rememberMe = false;
      state.error = false;
      state.success = false;
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      window.location.assign("/");
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setOnboardingLoading: (state, action) => {
      if (action.payload == true) {
        state.loading = true;
      }
    },
    setOnboarding: (state, action) => {
      if (action.payload.token && action.payload.token.access.length > 1) {
        state.loading = false;
        state.userInfo = action.payload.user;
        sessionStorage.setItem("token", action.payload.token.access);
        toast.success("Personal details updated Successfully");
      } else {
        state.loading = false;
        toast.error("Oops! Something went wrong. Try again!");
      }
    },
    toggleRemeberMe: (state, action) => {
      if (action.payload === "true") {
        state.rememberMe = true;
      } else if (action.payload === "false") {
        state.rememberMe = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        console.log(action);
        if (
          action.payload.token &&
          action.payload.token.access.length > 1
          // action.payload.is_signup_completed
        ) {
          console.log(action);
          state.token = action.payload.token.access;
          sessionStorage.setItem("token", action.payload.token.access);
          state.loggedIn = true;
          state.userInfo = action.payload.user;

          // window.location.assign("/user/onboarding");
        } else if (action.payload.detail) {
          // console.log("first");
          toast.error(action.payload.detail);
        } else {
          toast.error("Something went wrong! Try again");
        }
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.responseMessage = "Login failed, try again!";
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        if (
          action.payload.message &&
          action.payload.message === "Registration Successful" &&
          action.payload.token.access.length > 1
        ) {
          // console.log(action.payload);
          toast.success("Registration Successful!");
          state.token = action.payload.token.access;
          // sessionStorage.setItem("token", action.payload.token.access);
          window.location.assign("/account-verification");
          state.userInfo = action.payload.user;
        } else {
          toast.error("Username or email already exists");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.responseMessage = "System error";
      })
      .addCase(verifyEmail.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(action.payload);
        if (
          action.payload.token &&
          action.payload.token.access &&
          action.payload.token.access.length > 1
        ) {
          toast.success("Verification Successful!");
          state.token = action.payload.token.access;
          // sessionStorage.setItem("token", action.payload.token.access);
          // /user/onboarding
          // if(window?.location?.pathname?.includes("forgot=true")) {
          window.location.assign("/set-password");
          // } else {
          //   window.location.assign("/user/onboarding");
          // }
        }
        // if (action.payload.message === "success") {
        //   toast.success("Email verified successfully");
        //   window.location.assign("/set-new-password");
        // }
        // if (action.payload.data) {
        //   if (action.payload.data.user.isEmailVerified) {
        //     state.error = false;
        //     state.responseMessage = action.payload.message;
        //     state.loggedIn = true;
        //     if (state.rememberMe === true) {
        //       localStorage.setItem("token", state.token);
        //     } else {
        //       sessionStorage.setItem("token", state.token);
        //     }
        //   }
        // } else if (
        //   action.payload.message === "You've verified your account already"
        // ) {
        //   state.error = true;
        //   state.responseMessage = action.payload.message;
        // } else {
        //   state.error = true;
        //   state.responseMessage = action.payload.error[0];
        // }
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.responseMessage = "system error";
      })
      .addCase(sendVerificationCode.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(sendVerificationCode.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        // console.log(action.payload.message);
        if (
          action.payload.message &&
          action.payload.message.includes("OTP sent")
        ) {
          toast.success("OTP sent successfully.");
        }
        // state.success = true;
        // state.responseMessage = action.payload.message;
      })
      .addCase(sendVerificationCode.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.responseMessage = action.payload?.message;
      })
      .addCase(accountCheck.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(accountCheck.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        // console.log(action.payload);
        if (!action.payload.user_exist && !action.payload.is_signup_completed) {
          toast.error("Account does not exist! Please register and continue");
        } else if (
          action.payload.user_exist &&
          !action.payload.is_signup_completed
        ) {
          state.token = action.payload.token.access;
          toast.info(
            "You have not completed sign up! An OTP has been sent to your email for verification. Redirecting..."
          );
          setTimeout(() => {
            window.location.assign("/account-verification?forgot=true");
          }, 3000);
        } else if (
          action.payload.user_exist &&
          action.payload.is_signup_completed
        ) {
          state.showField = true;
        }
      })
      .addCase(accountCheck.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.responseMessage = action.payload?.message;
      })
      .addCase(airtimePayment.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(airtimePayment.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        console.log(action);
      })
      .addCase(airtimePayment.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.responseMessage = action.payload?.message;
      }) 
      .addCase(dataPayment.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(dataPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        console.log(action);
      })
      .addCase(dataPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.responseMessage = action.payload?.message;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
        state.error = false;

        window.location.assign("/account-verification?forgot=true");
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.responseMessage = action.payload?.message;
      })
      .addCase(setPassword.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(setPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        // console.log(action.payload);
        if (action.payload.user && action.payload.token.access) {
          state.userInfo = action.payload.user;
          sessionStorage.setItem("token", action.payload.token.access);
          toast.success("Password set successfully");
          state.loggedIn = true;
          // window.location.assign("/user");
        }
      })
      .addCase(setPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.responseMessage = action.payload?.message;
      })
      .addCase(kycVerification.pending, (state, action) => {
        state.loading = true;
        state.error = false;
        // console.log("hh");
      })
      .addCase(kycVerification.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        if (action.payload.token && action.payload.token.access.length > 1) {
          state.userInfo = action.payload.user;
          sessionStorage.setItem("token", action.payload.token.access);
          toast.success(action.payload.message);
        }
        if (action.payload.detail) {
          toast.error(action.payload.detail);
        }
        // console.log(action.payload);
      })
      .addCase(kycVerification.rejected, (state, action) => {
        state.loading = false;
        state.error = false;
      })
      .addCase(setPin.pending, (state, action) => {
        state.loading = true;
        state.error = false;
        // console.log("hh");
      })
      .addCase(setPin.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        if (action.payload.token && action.payload.token.access.length > 1) {
          toast.success(action.payload.message);
          state.userInfo = action.payload.user;
          sessionStorage.setItem("token", action.payload.token.access);
          window.location.assign("/user/dashboard");
        }
        if (action.payload.detail) {
          toast.error(action.payload.detail);
        }
        // console.log(action.payload);
      })
      .addCase(setPin.rejected, (state, action) => {
        state.loading = false;
        state.error = false;
      })
      .addCase(getOpenBets.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getOpenBets.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;

        state.openBets = action.payload.results
        console.log(action.payload);
      })
      .addCase(getOpenBets.rejected, (state, action) => {
        state.loading = false;
        state.error = false;
        toast.error("Ooops!! Something went wrong, try again later!");
      })
      .addCase(getPendingBets.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getPendingBets.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        console.log(action.payload);

        state.pendingBets = action?.payload?.results
      })
      .addCase(getPendingBets.rejected, (state, action) => {
        state.loading = false;
        state.error = false;
        toast.error("Ooops!! Something went wrong, try again later!");
      })
      .addCase(getDataList.pending, (state, action) => {
        // state.loading = true;
        state.error = false;
      })
      .addCase(getDataList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.dataList = action.payload?.results?.content?.variations;
        console.log(action.payload);
      })
      .addCase(getDataList.rejected, (state, action) => {
        state.loading = false;
        state.error = false;
        // toast.error("Ooops!! Something went wrong, try again later!");
      })
      
      .addCase(getTvList.pending, (state, action) => {
        // state.loading = true;
        state.error = false;
      })
      .addCase(getTvList.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.dataList = action.payload?.results?.content?.variations;
        console.log(action.payload);
      })
      .addCase(getTvList.rejected, (state, action) => {
        state.loading = false;
        state.error = false;
        // toast.error("Ooops!! Something went wrong, try again later!");
      })
      .addCase(getAllEventTypes.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllEventTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        // console.log(action.payload);
        state.betTypes = action.payload.results;
      })
      .addCase(getAllEventTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = false;
        toast.error("Ooops!! Something went wrong, try again later!");
      })

      .addCase(addEvent.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        // console.log(action.payload);
        if (
          action.payload.event_id &&
          action.payload.event_id.length > 1 &&
          action.payload.participants.length > 0
        ) {
          // toast.success("Event created Successfully");
        }
        if (action.payload.detail && action.payload.detail.length > 1) {
          toast.error(action.payload.detail);
        }
        // state.betTypes = action.payload.results;
      })
      .addCase(addEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = false;
        toast.error("Ooops!! Something went wrong, try again later!");
      })
      

      .addCase(placeBet.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(placeBet.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        // console.log(action.payload);
        // if (
        //   action.payload.event_id &&
        //   action.payload.event_id.length > 1 &&
        //   action.payload.participants.length > 0
        // ) {
        //   // toast.success("Event created Successfully");
        // }
        if (action.payload.detail && action.payload.detail.length > 1) {
          toast.error(action.payload.detail);
        }
        // state.betTypes = action.payload.results;
      })
      .addCase(placeBet.rejected, (state, action) => {
        state.loading = false;
        state.error = false;
        toast.error("Ooops!! Something went wrong, try again later!");
      })

      .addCase(inviteBettor.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(inviteBettor.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        console.log(action);
      })
      .addCase(inviteBettor.rejected, (state, action) => {
        state.loading = false;
        state.error = false;
        toast.error("Ooops!! Something went wrong, try again later!");
      })
      .addCase(getAirtimeOptions.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAirtimeOptions.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        // console.log(action.payload);
        state.airtimeOptions = action.payload.results;
      })
      .addCase(getAirtimeOptions.rejected, (state, action) => {
        state.loading = false;
        state.error = false;
        toast.error("Ooops!! Something went wrong, try again later!");
      })
      .addCase(setNewPin.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(setNewPin.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        // toast.success("Pin Updated Successful");
      })
      .addCase(setNewPin.rejected, (state, action) => {
        state.loading = false;
        state.error = false;
        toast.error("Error Updating Pin");
      })
      .addCase(deactivateAccount.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deactivateAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
      })
      .addCase(deactivateAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = false;
        toast.error("Error Deactivating Pin");
      })
      .addCase(generateIntent.pending, (state, action) => {
        state.intentLoading = true;
        state.error = false;
      })
      .addCase(generateIntent.fulfilled, (state, action) => {
        state.intentLoading = false;
        state.error = false;
        if (
          action.payload.reference_number &&
          action.payload.reference_number.length > 2
        ) {
          state.intent = action.payload;
        }
      })
      .addCase(generateIntent.rejected, (state, action) => {
        state.intentLoading = false;
        state.error = false;
        toast.error("Ooops!! Something went wrong, try again later!");
      })
      .addCase(getWalletBalance.pending, (state, action) => {
        state.balanceLoading = true;
        state.error = false;
      })
      .addCase(getWalletBalance.fulfilled, (state, action) => {
        state.balanceLoading = false;
        state.error = false;
        if (action.payload.results && action.payload.results.length > 0) {
          state.balance = action.payload.results;
        }
      })
      .addCase(getWalletBalance.rejected, (state, action) => {
        state.balanceLoading = false;
        state.error = false;
        toast.error("Error fetching balance");
      })
      .addCase(getUserCreatedEvents.pending, (state, action) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getUserCreatedEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        if (action.payload && action.payload?.results.length > 0) {
          state.userEvents = action.payload?.results;
        } else {
          // toast.error("Error fetching user created events");
        }
      })
      .addCase(getUserCreatedEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = false;
        // toast.error("Error fetching balance");
      })

      .addMatcher(
        (action) =>
          action.type.endsWith("/fulfilled") && action.meta.arg === undefined,
        (state) => {
          state.responseMessage = "";
        }
      );
  },
});

export const {
  logout,
  setOnboarding,
  setOnboardingLoading,
  toggleDarkMode,
  setApplyCoursePrice,
  toggleRemeberMe,
  submitPersonalityTest,
  setAIConversationsState,
  clearJuliethResponse,
  addCourseToDrafts,
  deleteCourseFromDrafts,
  setDraftActive,
  setSelectedCourseId,
  setCourseToBeDeleted,
  updateDraft,
  setCourseDraftThumbnail,
  setAcknowledgedFeedback,
  addTopicToCourseDraft,
  deleteTopicFromCourseDraft,
  deleteTopicMediaFileDraft,
  deleteSubtopic1MediaFileDraft,
  deleteSubtopic2MediaFileDraft,
  editTopicTitleDraft,
  editTopicDescriptionDraft,
  setTopicMediaDraft,
  setSubtopic1MediaDraft,
  setSubtopic2MediaDraft,
  setTopicMediaUpload,
  setSubtopic1MediaUpload,
  setSubtopic2MediaUpload,
  clearTopicMediaDraft,
  clearSubtopic1MediaDraft,
  clearSubtopic2MediaDraft,
  addSubtopic1ToCourseDraft,
  addSubtopic2ToCourseDraft,
  setSubtopic1Drafts,
  setSubtopic2Drafts,
  editSubtopic1TitleDraft,
  editSubtopic1DescriptionDraft,
  editSubtopic2TitleDraft,
  editSubtopic2DescriptionDraft,
  setSelectedCategory,
  setSelectedTopicId,
  setPersonalityTest2ConversationState,
  setDraftTestArray,
  setDraftTestQuestion,
  setDraftTestOptionA,
  setDraftTestOptionB,
  setDraftTestOptionC,
  setDraftTestOptionD,
  setDraftTestOptionACorrect,
  setDraftTestOptionBCorrect,
  setDraftTestOptionCCorrect,
  setDraftTestOptionDCorrect,
  resetVerifyPaystackObj,
  setAITutorConversationState,
  setJuliethVoiceText,
  setSpeechEncoded,
} = userReducer.actions;
export default userReducer.reducer;
