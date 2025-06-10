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
            <legend className="fieldset-legend">What is your name?</legend>
            <input type="text" className="input" placeholder="Type here" />
            <p className="label">Optional</p>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
