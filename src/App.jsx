import Navbar from "./Navbar";
function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-teal-950 to-teal-800 h-screen ">
        <Navbar />
        <div className="bg-yellow-600 w-full h-1"></div>
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-24 xl:px-24 text-xl gap-8 h-2/3">
          <div className="w-[250px] h-[270px] bg-transparent ring-yellow-600 ring-1 text-white text-center p-2 px-4 rounded-md">
            <div className="flex px-5 py-2 items-center rounded-sm">
              <p className="font-bold mx-1">HPAY</p>
              <div className="h-[25px] bg-yellow-600 w-[2px]"></div>
              <p className="mx-1">Exchange</p>
            </div>

            <div className="flex-col">
              <div className="flex  bg-teal-900 p-1 shadow-sm mb-3 items-center text-sm justify-between rounded-sm">
                <img src="/BuyHedgePay.svg" className="mx-2" />
                <p>Buy HedgePay</p>
                <img src="/Vector.svg" />
              </div>
              <div className="flex  bg-teal-900 p-1 shadow-sm mb-3 text-sm items-center justify-between">
                <img src="/Share.svg" className="mx-2" />
                <p>Transfer Gateway</p>
                <img src="/Vector.svg" />
              </div>
              <div className="flex justify-between bg-teal-900 p-1 shadow-sm mb-3 text-sm items-center">
                <img src="/PresentationChart.svg" className="mx-2" />
                <p>View Chart</p>
                <img src="/Vector.svg" />
              </div>
              <div className="flex justify-between bg-teal-900 p-1 py-3 shadow-sm mb-3 text-sm items-center">
                <img src="/Vector1.svg" className="mx-2" />
                <p>Buy with Transak</p>
                <img src="/Vector.svg" />
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <h1 className="text-4xl  font-bold text-white">Aggregator DEX</h1>
            {/* desc */}
            <p className="md:text-xl text-slate-300 mt-3">
              HedgePay’s Aggregator DEX has the ability to track the best prices
              for the token you want on established Decentralized Exchanges. The
              HedgePay DEX will also provides you with the option to set limit
              orders, giving you the freedom hunt for the token you want at the
              price you want it
            </p>
            {/* button */}
            <div className="w-full flex gap-5 mt-4">
              <button className="px-5 py-1 rounded-lg ring-yellow-600 ring-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white ">
                Buy HedgePay
              </button>
              <button className="px-5 py-1 rounded-lg  ring-yellow-600 ring-1 text-white ">
                View Chart
              </button>
            </div>
          </div>
          <div className="w-[350px] h-[390px] bg-transparent ring-yellow-600 ring-1 text-white text-center p-2 rounded-md">
            <div className="flex px-1 py-1 items-center">
              <p className="mx-1 text-sm text-slate-300">Your Balance: $0.92</p>
            </div>
            <div className="flex px-1 py-1 items-center">
              <p className="mx-1 font-bold">0.20115234 NEAR</p>
            </div>
            <div className="flex px-1 py-1 items-center justify-between">
              <p className="mx-1 text-sm">You Pay</p>
              <p className="mx-1 text-sm">3409.2419 THPAY/NEAR</p>
            </div>

            <div className="flex-col gap-2">
              <div className="flex  bg-teal-900 p-1 shadow-sm mb-3 items-center text-sm justify-between rounded-md">
                <img src="/tw.svg" className="mx-2" />
                <p>0</p>
                <img src="/near.svg" />
              </div>
              <div className="flex px-1 py-1 items-center justify-between">
                <img src="/view.svg" />
                <p className="mx-1 text-[8px] text-slate-300">
                  Better by +76.7750%
                </p>
              </div>
              <div className="flex  bg-teal-900 p-1 shadow-sm mb-6 text-sm items-center justify-between">
                <img src="/infinity.svg" className="mx-2" />
                <p>0</p>
                <img src="/thpay.svg" />
              </div>
              <div className="flex mt-2 justify-start">
                <div>
                  <input type="checkbox" />
                </div>
                <div className="flex justify-start">
                  <p className="text-[10px] text-slate-200">
                    I have read and agree with HedgePay Terms of Service. I have
                    done my research to make sure I am legally able to purchase
                    the token in my country of residence.
                  </p>
                </div>
              </div>
              <button className="w-full bg-slate-500 rounded-md">Swap</button>
            </div>
          </div>
        </div>
        <div className="flex bg-gray-300 h-[2px] justify-center mx-[90px] mb-7" />
        <div className="flex justify-between mx-[90px]">
          <div>
            <img src="/CERTIK.svg" />
          </div>
          <div className="flex">
            <img src="/1.svg" />
            <img src="/2.svg" />
            <img src="/3.svg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
