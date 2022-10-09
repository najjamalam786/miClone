import React from 'react'
import "../styles/PreFooter.css"
import "../styles/Footer.css"

const repeatIcon =  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.55 41.9q-6.15-.5-10.35-5.05Q8 32.3 8 26.05q0-3.85 1.775-7.25t4.975-5.55l2.15 2.15q-2.8 1.65-4.35 4.525Q11 22.8 11 26.05q0 5 3.3 8.65 3.3 3.65 8.25 4.2Zm3 0v-3q5-.6 8.25-4.225 3.25-3.625 3.25-8.625 0-5.45-3.775-9.225Q29.5 13.05 24.05 13.05h-1l3 3-2.15 2.15-6.65-6.65L23.9 4.9l2.15 2.15-3 3h1q6.7 0 11.35 4.675 4.65 4.675 4.65 11.325 0 6.25-4.175 10.8Q31.7 41.4 25.55 41.9Z"/></svg>

const shieldIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m21.8 30.65 11.4-11.4-2.1-2.05-9.15 9.15-5.05-5.05-2.2 2.2Zm2.2 13.3q-7-1.75-11.5-8.125T8 21.85V9.95l16-6 16 6v11.9q0 7.6-4.5 13.975T24 43.95Zm0-3.1q5.75-1.9 9.375-7.175T37 21.85v-9.8l-13-4.9-13 4.9v9.8q0 6.55 3.625 11.825Q18.25 38.95 24 40.85ZM24 24Z"/></svg>

const mapIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m21.9 25.95 9.6-9.6-2.15-2.15-7.45 7.45-3.25-3.25-2.15 2.15Zm2.1 14.1q6.65-6.05 9.825-10.975Q37 24.15 37 20.4q0-5.9-3.775-9.65T24 7q-5.45 0-9.225 3.75Q11 14.5 11 20.4q0 3.75 3.25 8.675Q17.5 34 24 40.05ZM24 44q-8.05-6.85-12.025-12.725Q8 25.4 8 20.4q0-7.5 4.825-11.95Q17.65 4 24 4q6.35 0 11.175 4.45Q40 12.9 40 20.4q0 5-3.975 10.875T24 44Zm0-23.6Z"/></svg>



const instagramIcon = <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"/><stop offset=".328" stop-color="#ff543f"/><stop offset=".348" stop-color="#fc5245"/><stop offset=".504" stop-color="#e64771"/><stop offset=".643" stop-color="#d53e91"/><stop offset=".761" stop-color="#cc39a4"/><stop offset=".841" stop-color="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"/><stop offset=".999" stop-color="#4168c9" stop-opacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>

const GoogleIcon = <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>

const youtubeIcon= <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="#FFF" d="M20 31L20 17 32 24z"/></svg>

const twitterIcon = <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"/></svg>


const Facebook = <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg>

const Footer = ({footer}) => {
  return (
    <>
    <div className='PreFooter'>
    <div>
    {repeatIcon}
    <p> <b>Hassle-free replacement</b> <br/>10-day easy replacement policy on mi.com</p>
    </div>

    <div>
        {shieldIcon} <p> <b>100% secure payments</b> <br/> We support Cards, Wallets, EMI and COD</p>
    </div>

    <div>
        {mapIcon} <p><b>Vast service network</b> <br/> 1000 Mi service-center across 600 cities</p>
    </div>

    </div>
    <div className='PreFooter2'>
        <div>
        <p>LET's STAY IN TOUCH</p><span>Get updates on sales specials and more</span>
        </div>
        <div>
            <div>
                <input type="email" name="email" placeholder='Enter Email Address'/>
                <button> ^ </button>
            </div>
        <span>Thanks. You're on our email list for special offers.</span>
        </div>
        <div>
            <p>FOLLOW MI</p>
            <span>We want to hear from you!</span>
        </div>
        <div>
            {Facebook} {youtubeIcon} {instagramIcon} {twitterIcon} {GoogleIcon}
        </div>

    </div>
    <div className="Footer">
        <div>
            <p>SUPPORT</p>
            {footer.support.map((item,index) => (
                <a key={item.url} href={item.url} alt={`${index} aboutUs`}>{item.name}</a>
            ))}
        </div>
        <div>
            <p>SHOP AND LEARN</p>
            {footer.shopAndLearn.map((item,index) => (
                <a key={item.url} href={item.url} alt={`${index} shopAndLearn`}>{item.name}</a>
            ))}
        </div>
        <div>
            <p>RETAIL STORE</p>
            {footer.retailStore.map((item,index) => (
                <a key={item.url} href={item.url} alt={`${index} retailStore`}>{item.name}</a>
            ))}
        </div>
        <div>
            <p>ABOUT US</p>
            {footer.aboutUS.map((item,index) => (
                <a key={item.url} href={item.url} alt={`${index} aboutUs`}>{item.name}</a>
            ))}
        </div>
        <div>
            <p>CONTACT US</p>
            {footer.contactUs.map((item,index) => (
                <a key={item.url} href={item.url} alt={`${index} contactUs`}>{item.name}</a>
            ))}
        </div>
        <div>
            <div>Chat with our Virtual AI Bot 
    (24/7 Live Agent Support)
            </div>
            <button>CHAT NOW</button>
        </div>


    </div>
    <div className='FooterBorder'>
        <div>Copyright 2010 - 2027 Xiaomi. All Rights Reserved</div>
    </div>
    </>
  )
}

export default Footer