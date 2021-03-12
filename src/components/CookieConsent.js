import React, { useEffect, useState } from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { useCookies, CookiesProvider } from "react-cookie"
import { MdClose } from "react-icons/md"
export default function CookieConsent() {
  const [cookie, setCookie] = useCookies(["consent"])

  return (
    <CookiesProvider>
      {cookie.consent !== "true" && (
        <div
          css={css`
            position: fixed;
            z-index: 1000000000000000 !important;
            bottom: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            background: rgba(0, 0, 0, 0.8);
            padding: 1rem;

            overflow: hidden;
            box-sizing: border-box;
            /* @md */
            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              flex-direction: row-reverse;
            }
          `}
        >
          <div
            css={css`
              cursor: pointer;
              padding: 8px;
              text-align: right;
              float: right;
              /* @md */
              @media (min-width: 768px) {
                float: none;
              }
            `}
            onClick={() => {
              setCookie("consent", "true", { path: "/" })
            }}
          >
            <MdClose
              css={css`
                color: #fff;
              `}
            />
          </div>
          <div
            css={css`
              font-size: 14px;
              color: #fff;
              padding-right: 1rem;
            `}
          >
            Open Coast uses cookies to improve your experience on our site.
            Cookies enable you to enjoy certain features like social sharing
            functionality. They also help us understand how our site is being
            used. By continuing to use our site you consent to the use of
            cookies in accordance with our{" "}
            <Link
              css={css`
                color: #77adfd;
              `}
              to="/privacy-policy/"
            >
              policy
            </Link>
          </div>
        </div>
      )}
    </CookiesProvider>
  )
}
