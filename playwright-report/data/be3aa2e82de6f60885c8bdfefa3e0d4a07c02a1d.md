# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/login.spec.ts >> @api @smoke Login API >> Valid login returns token
- Location: tests/api/login.spec.ts:6:7

# Error details

```
Error: expect(received).toHaveProperty(path)

Expected path: "token"
Received path: []

Received value: "<!DOCTYPE html><html lang=\"en-US\"><head><title>Just a moment...</title><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\"><meta name=\"robots\" content=\"noindex,nofollow\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><style>*{box-sizing:border-box;margin:0;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%;color:#313131;font-family:system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"}body{display:flex;flex-direction:column;height:100vh;min-height:100vh}.main-content{margin:8rem auto;padding-left:1.5rem;max-width:60rem}@media (width <= 720px){.main-content{margin-top:4rem}}#challenge-error-text{background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+\");background-repeat:no-repeat;background-size:contain;padding-left:34px}</style><meta http-equiv=\"refresh\" content=\"360\"></head><body><div class=\"main-wrapper\" role=\"main\"><div class=\"main-content\"><noscript><div class=\"h2\"><span id=\"challenge-error-text\">Enable JavaScript and cookies to continue</span></div></noscript></div></div><script>(function(){window._cf_chl_opt = {cvId: '3',cZone: 'fakestoreapi.com',cType: 'managed',cRay: '9e897e1a6f2acbae',cH: 'J5bGYKdadevRXclMHFb4zIvOv9uuw5_NoPRXM5.uCQo-1775569734-1.2.1.1-KkaukkS.ipd12vHbqQH5I.6PawbCrs0hJ3Q3O6lvNOWvPRKF6qi4f9JUznVe75y3',cUPMDTk:\"/auth/login?__cf_chl_tk=FzrW3JGBuYd4iFRUIF8pRJKZxDR_pZykuyvV4kMPTEk-1775569734-1.0.1.1-4GoI4.oXBveRT7AD3NUK8C9CtNCY1pSi92GwIsDSScc\",cFPWv: 'b',cITimeS: '1775569734',cTplC:0,cTplO:0,cTplV:5,cTplB: '0',fa:\"/auth/login?__cf_chl_f_tk=FzrW3JGBuYd4iFRUIF8pRJKZxDR_pZykuyvV4kMPTEk-1775569734-1.0.1.1-4GoI4.oXBveRT7AD3NUK8C9CtNCY1pSi92GwIsDSScc\",md: 'zMU3J_vntVAL__ZwSlt8VMYEDqcTl2isEh51HnBYx2I-1775569734-1.2.1.1-SSlYyob4X_gdh36P3729l099J4Xsgms56lg4zLW3WBV9YoSv0QaJExND4vl_3DqNoHUVSOJugphRRXGBe1YBRosP69ppJKA2ijhagboj4q6ZdtNgxI9MMlbyc5MFW00tBX5Oe3onrNPZvQy0eERWa.9v0cfzwAYB4Nvk1ZSCMtAf2KiuYOMlRiKT99UHRyJOIbYrWfzvMBmVyBA2M8rSBd8isIIq6YDKc35dBHOs4aVE9nEfcINrw3kc2mKSMVhLqiFbRR006McBrz93.dXWP5HGmxX46HOeayyqLKM8e2zRnG.Eqc6UuimeVy5i_gvOgnhyyWU.7JDUdR4WmlqxVouNIatyr8t5iP9Xif8ixsc4hM_0YRpeiokQE2aowZeXN1cz8.1TdyHTg7sFRrQOaBMD_uAerFnISqXD8kc9saDNBmqq5jWjL7VevIwYRSx9_j7Rtzr9eZ6A0tVy47mrPmQqL96mYOUz4NaxvldI2aofLTj79C2mWtpKWQaB1VVnlMGuuctFzirj8.u62bgqDGR29b3Li1hwPyt7fwFh5.JJ4hmqH_0xpV1uEk_S4Julsr1UgEaJw8SPcfpzrX_MoIMX8Zzcq_yhMnLyW1HF6IvwCVikRFzf1iXGGnpkpORd2Bnv.gLXTVyttmAnKhxePyYqHpuc_cPIL0yFld5pSdFFPcSz33fDaJRTxf7lVqMLYuiBY9nAG6zQC6bUtuMlLBZYqm31d8zprf3bmMdO1ymJuqvnh3UHeFyrcHsi53z2sQjvIURfmImK6diSb3fSAqy.YlzG4JXUGO1SM9FXiXrTt_OOAAyEzYzenbH0SPpdUoNkBvM1T56HKnA5GouSEQPDyJuwWaqkW3P99eQXleiHrUdeagqRl_8FlXT7qLXousurZYqkwOI3doUs0K8xEP7h5Taaz2.8ZRc_paDUjC7L_jWMqmBUtojCZ2XFdTX2GOLLF56oKbIEo.BZ4eNBmw',mdrd: 'aJHGTndsWMWW6eUNl0oT_8vENritKMLR5G6ecuPdRPk-1775569734-1.2.1.1-Em4ziSCZ30srDsNcmZkVcqAaqZXldW.VFTV5.rqk3mIujbbkEtNSminY0349RynsMFsDtYq0ckk3Jz9aFQptQt6L32CIjnhg4Nh.ep8O_qiBr6yYyGQsp0fb039yHh3Fww2oTNgOdywJG.xR.fabxYSjotLeHwR4dsZgKROGw3ahsE8nnAFV_MXNKsg4pbGJ9Gk5QmxobIUEJEObKXOzOQQbx2yUjWtfajrXurKQGxeXZI4a_wPyLwkW8.JrV8Y6lwqkBhzTDYcEEp_0tG5T_sCimfgtHeWtkBy0Wrb8i16.w81T5QGa627e.0krWYVDVXAAJg2UuR8vsOsFJ0cBtn3PanMXcdroJcChjPvCbW.N3wRHkdyCfrgTyokIRNX9jbQiG5VzFsetR6tbOEF0shQVOx6Nt5OMRjtZG5ZUAWBIOaCL9cOnJUfiPM84gwJq7kwSEZSdzojcUbb3UPELt2YQYKbHBVFPsjeYONaeWaFEMlXnn.sBoBXZIky4OcmM.u.cSaZ66ALX1dJznU6GAQ',};var a = document.createElement('script');a.src = '/cdn-cgi/challenge-platform/h/b/orchestrate/chl_page/v1?ray=9e897e1a6f2acbae';window._cf_chl_opt.cOgUHash = location.hash === '' && location.href.indexOf('#') !== -1 ? '#' : location.hash;window._cf_chl_opt.cOgUQuery = location.search === '' && location.href.slice(0, location.href.length - window._cf_chl_opt.cOgUHash.length).indexOf('?') !== -1 ? '?' : location.search;if (window.history && window.history.replaceState) {var ogU = location.pathname + window._cf_chl_opt.cOgUQuery + window._cf_chl_opt.cOgUHash;history.replaceState(null, null,\"/auth/login?__cf_chl_rt_tk=FzrW3JGBuYd4iFRUIF8pRJKZxDR_pZykuyvV4kMPTEk-1775569734-1.0.1.1-4GoI4.oXBveRT7AD3NUK8C9CtNCY1pSi92GwIsDSScc\"+ window._cf_chl_opt.cOgUHash);a.onload = function() {history.replaceState(null, null, ogU);}}document.getElementsByTagName('head')[0].appendChild(a);}());</script></body></html>"
```

# Test source

```ts
  1  | import { test } from "../fixtures/authFixtures";
  2  | import { expect } from "@playwright/test";
  3  | import { loginPayload } from "../../src/utils/testAPIDataFactory";
  4  | 
  5  | test.describe("@api @smoke Login API", () => {
  6  |   test("Valid login returns token", async ({ authClient }) => {
  7  |     const { body } = await authClient.login(
  8  |       loginPayload().username,
  9  |       loginPayload().password
  10 |     );
> 11 |     expect(body).toHaveProperty("token");
     |                  ^ Error: expect(received).toHaveProperty(path)
  12 |     expect(typeof body.token).toBe("string");
  13 |   });
  14 | 
  15 |   test("Invalid login returns error", async ({ authClient }) => {
  16 |     const { status, body } = await authClient.login("wrong", "wrong");
  17 |     expect(
  18 |       status === 401 ||
  19 |         (status === 200 && (typeof body === "string" ? body.includes("incorrect") : !body.token))
  20 |     ).toBeTruthy();
  21 |   });
  22 | });
```