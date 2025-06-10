import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-12">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            height="540"
            width="540"
            alt="login image"
          />
        </div>

        <div>
          <fieldset className="fieldset">
            <h2 className="text 4xl items-center">Sign in</h2>
            <legend className="fieldset-legend">Email</legend>
            <input type="text" name="email" className="input" placeholder="Your Email" />
            <legend className="fieldset-legend">Password</legend>
            <input type="text" name="password" className="input" placeholder="Your Password" />
            
          </fieldset>
        </div>
      </div>
    </div>
  );
}
