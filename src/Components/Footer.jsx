import { MdLocationOn, MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-primary pt-10 pb-5 text-body ">
      {/* box 1 */}
      <div className="flex flex-col md:items-center sm:justify-between  mx-5 md:flex-row gap-5">
        <h3 className=""> Createanary</h3>
        {/* box 2 */}
        <div>
          <h4 className="footer_items font-extrabold">Navigation</h4>
          <div className="footer_items">About Createnary</div>
          <div className="footer_items">Contact Us</div>
          <div className="footer_items">Refund</div>
          <div className="footer_items">News Letters</div>
          <div className="footer_items">Terms and Conditions</div>
          <div className="footer_items">Privacy and Policy</div>
        </div>
        {/* box 3 */}
        <div>
          <h4 className="footer_items font-bold">Contacts</h4>
          <div className="footer_items flex items-center gap-2">
            {" "}
            <MdLocationOn /> Delhi, India
          </div>
          <div className="footer_items flex items-center gap-2">
            <MdOutlinePhone />
            <div className="flex flex-col">
              <span> +91 98765 43210</span>
              <span>+91 99999 99999</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-white border-x-2"></div>
    </footer>
  );
};

export default Footer;
