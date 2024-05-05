import NextPost from "./nextPost";


function Footer() {
    return(
        <div className="text-sm text-center my-5">
            <p>Donate (ETH/ ERC20):</p>
            <p>
                <a
                href="https://etherscan.io/address/0xE521fC02155C8F49Bf10758cDc8A1AC3732Dc330"
                className="text-red-400 hover:underline"
                >
                0xE521fC02155C8F49Bf10758cDc8A1AC3732Dc330
                </a>
                </p>
            {/* <NextPost /> */}
        </div>
    )
}
export default Footer;