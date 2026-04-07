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

Received value: "<!DOCTYPE html><html lang=\"en-US\"><head><title>Just a moment...</title><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\"><meta name=\"robots\" content=\"noindex,nofollow\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><style>*{box-sizing:border-box;margin:0;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%;color:#313131;font-family:system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"}body{display:flex;flex-direction:column;height:100vh;min-height:100vh}.main-content{margin:8rem auto;padding-left:1.5rem;max-width:60rem}@media (width <= 720px){.main-content{margin-top:4rem}}#challenge-error-text{background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0IyMEYwMyIgZD0iTTE2IDNhMTMgMTMgMCAxIDAgMTMgMTNBMTMuMDE1IDEzLjAxNSAwIDAgMCAxNiAzbTAgMjRhMTEgMTEgMCAxIDEgMTEtMTEgMTEuMDEgMTEuMDEgMCAwIDEtMTEgMTEiLz48cGF0aCBmaWxsPSIjQjIwRjAzIiBkPSJNMTcuMDM4IDE4LjYxNUgxNC44N0wxNC41NjMgOS41aDIuNzgzem0tMS4wODQgMS40MjdxLjY2IDAgMS4wNTcuMzg4LjQwNy4zODkuNDA3Ljk5NCAwIC41OTYtLjQwNy45ODQtLjM5Ny4zOS0xLjA1Ny4zODktLjY1IDAtMS4wNTYtLjM4OS0uMzk4LS4zODktLjM5OC0uOTg0IDAtLjU5Ny4zOTgtLjk4NS40MDYtLjM5NyAxLjA1Ni0uMzk3Ii8+PC9zdmc+\");background-repeat:no-repeat;background-size:contain;padding-left:34px}</style><meta http-equiv=\"refresh\" content=\"360\"></head><body><div class=\"main-wrapper\" role=\"main\"><div class=\"main-content\"><noscript><div class=\"h2\"><span id=\"challenge-error-text\">Enable JavaScript and cookies to continue</span></div></noscript></div></div><script>(function(){window._cf_chl_opt = {cvId: '3',cZone: 'fakestoreapi.com',cType: 'managed',cRay: '9e897e26afb14800',cH: 'vXw9zEU93_b5nj11tiXPnF3LbTa1B7acWo0YJX4ernk-1775569736-1.2.1.1-b_9u0nE5dNesj1bvj8j_W10L7pphzN_l0RI3uAfBzk65LoD5jVV_FkEKtTnTcSgp',cUPMDTk:\"/auth/login?__cf_chl_tk=.1Rdlpjv02E8Xe75PLCppZ3goWoEq.hIQTu.J3KPruU-1775569736-1.0.1.1-YI8qxXJIMWmHkKbj_nRuSjjDjbMVGbcYriQHAigHHCM\",cFPWv: 'b',cITimeS: '1775569736',cTplC:0,cTplO:0,cTplV:5,cTplB: '0',fa:\"/auth/login?__cf_chl_f_tk=.1Rdlpjv02E8Xe75PLCppZ3goWoEq.hIQTu.J3KPruU-1775569736-1.0.1.1-YI8qxXJIMWmHkKbj_nRuSjjDjbMVGbcYriQHAigHHCM\",md: 'XDzyopld40664TLRFY6HEOYE2tRE5HFFFNQK0Jpa0NE-1775569736-1.2.1.1-sUYfuaYe68KSeMMT1DHclMhnhb_BMM0ceJuxsjZ3JlxOLJjOgvYSlPvlIt_P34WCkI8OdU_fdSFvIsnJw.P25rDMjJDj92py8DeolNLb1EvP5yD4xrs41gng3vKjuw9mhMvNB2rEtikH7uge3V6srZuILb33GTN_wc_pr_OXWMLq4QTbkz4bU_l__bcHbCmzHxbcOI2x._OPJN1k5UxYvhXIO1eBcGYRnXxLlsywo_nr4m.0uSvhokXPFGrthc4W_xhOQjIvWj94E3cR6xP9ztfEucoQgOrFVINqYXy9qKv2YkX6Y9DG3Uu8b3.4gdOeNfVBkp_fjJnmaxUUjDyZZbCrJv3DCpAuX1H8EM1U7puWdjyIP90mlfOZr3OWyNdJfe7Sf_LL2jVh.dtIX65z4sRXVbHDlQpO5apx4EjTF43strMVUqBmD9L7nhV2bqa0iimHzqpFOzd33aV2a_P19v6ovjz6jABeHUYXfv1rWsfHiPNSTLUhwO5bIMdKzoerw8an_XMGZCSMsIR4cinHQnNSp64l_2.XYJ97pdbHY8TiHHNZ060MjkG3BWeePvmMeQgjb4wsj7tWsgKv0dF0NjYyD.t6U6gpXxoxkRYsZ5tlwja55yOCyOW19nOzimghEjo_2LnR3OhtLJ5z02AvVUCX1zwvFv0MHXk6YMWz6C_9LH.VFiDN.AxXHrrOyd4RpsNJC8X9.chtJgX70HG9xpKuL3UDPWnMlV98r9MHrKHWQtzczau6O6ppjucAdS6QAuPZ5xHTmxH93Mag1VarDgX4JO40ZEdP3DWzSKuE2jqnkFTfsDEoP7aybjfG59k4ZAFfW9InBOHpD8WBB58TIXRE.rw623lDIEkjaJIgtNGitd5OoTa_b3esGuxCHR2SegIP4RgmDAI4pOJX.JrTlMLwDufaAc9ad8pTX_1fFpe.GO7bnTaQGAtcW3n8y_doTFvD5JXypxPZ_ygpw3H8bw',mdrd: '7vm0F_dHs0tBlt1qbt.XGrc9nF9oVmVE3gKCzefLHtA-1775569736-1.2.1.1-y.v46jg7xboaQE_Mf7uFLIj8aj1beILXEeq8Srt80MTVa_Cdy_5hFg.Wtm98CNQ.VkvsHqIlGkmQCITtqMGJHvKWikWGuZeX9Tlpdxg_iqbGb3bISvpy46XohNNvLh2lWnvJBm3.MpwB7MaN0cdAr4VbZbJUcPYZeWHoASLkHLOycXAJxgNZyTVPckSGPbvN.xiAyIzrQ9Wt8EaU66Fh0NQYteCqb1JziWNPDILr9W4fzl0E_Ha4pHFBJjCAu1xfQpKhyw_i6u9WDkWaO4vFg.A_co7NOjeBVeyb_ygOmTi8.lhmFEm2iokCNVwx.dXE7cOFQZYWOlBoHALtontyQwq8wyRPJnlgKPrw0mfaJjxvyK9mxKIkZ7vKjHDXWSegQqlIsyB6YN46eMAJNFDOgtlmVIUcL05D6Z8u2YKXZ25E2CseUV8EYacC8F74sUepW4vGkw5LG3BZ6e_g.zI.5arIRm0PYbxuCoFUVJq1ZAyn9JReKJ6guePSHxip3XLsycmdd3bJsCA.P9i0M_6sFg',};var a = document.createElement('script');a.src = '/cdn-cgi/challenge-platform/h/b/orchestrate/chl_page/v1?ray=9e897e26afb14800';window._cf_chl_opt.cOgUHash = location.hash === '' && location.href.indexOf('#') !== -1 ? '#' : location.hash;window._cf_chl_opt.cOgUQuery = location.search === '' && location.href.slice(0, location.href.length - window._cf_chl_opt.cOgUHash.length).indexOf('?') !== -1 ? '?' : location.search;if (window.history && window.history.replaceState) {var ogU = location.pathname + window._cf_chl_opt.cOgUQuery + window._cf_chl_opt.cOgUHash;history.replaceState(null, null,\"/auth/login?__cf_chl_rt_tk=.1Rdlpjv02E8Xe75PLCppZ3goWoEq.hIQTu.J3KPruU-1775569736-1.0.1.1-YI8qxXJIMWmHkKbj_nRuSjjDjbMVGbcYriQHAigHHCM\"+ window._cf_chl_opt.cOgUHash);a.onload = function() {history.replaceState(null, null, ogU);}}document.getElementsByTagName('head')[0].appendChild(a);}());</script></body></html>"
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