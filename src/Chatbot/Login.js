import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import axios from "axios";


function getCompanies(access_token) {
    return new Promise((resolve, reject) => {
      axios
        .get("https://app.subtl.ai/api/companies", {
          headers: {
            Authorization: "Bearer " + access_token,
          },
        })
        .then((r) => {
          resolve([r.data.global_group, r.data.id, r.data.name]);
        });
    });
  }

function getLoginResponse(username, password) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams();
      params.append("username", username);
      params.append("password", password);
      fetch("https://app.subtl.ai/api/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      })
        .then((response) => {
          return response.json();
        })
        .then((resp) => {
          resolve(resp);
        });
    });
  }
  
  function getUserDetails(token) {
    return new Promise((resolve, reject) => {
      axios
        .get("https://app.subtl.ai/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((rej) => reject(rej));
    });
  }

export default function LoginPage() {

    const email="ts@subtl.ai"
    const password="Subtl@2023"

    function LoginFunction() {
        return new Promise((resolve, reject) => {
            if (!email || !password) {
                reject(true)
            }
            if (email && password) {
                getLoginResponse(email, password).then((res) => {
                    if (res.detail) {
                        return
                    }
                    console.log("LOGGED IN!", res);
                    sessionStorage.setItem('access_token', res.access_token);
                    getCompanies(res.access_token).then((res) => {
                        sessionStorage.setItem('company_group', res[0]);
                        sessionStorage.setItem('company_id', res[1]);
                        sessionStorage.setItem('company_name', res[2]);
                    })
                    getUserDetails(res.access_token).then((res) => {
                        console.log(res);
                        sessionStorage.setItem('LoggedIn', "true")
                        sessionStorage.setItem('user_info', JSON.stringify(res));
                        resolve(true)
                    })
                })
            }
        })
    }

    return (
        <div style={{paddingTop:"10em"}}>
            <Button
                variant={'contained'}
                onClick={() => {
                    LoginFunction().then((res) => {
                        if (res) {
                            window.open('/chathome', '_self')
                        }
                    })
                }}>
                {"Login"}
            </Button>
        </div>
    )
}
