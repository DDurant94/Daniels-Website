import "./../Styles/Loader-Styles/LoaderStyles.css"

const Loader = () => {

  return(
    <div id="loading">

      <div id="loading-mask">

        <div id="loader">

          <div id="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Loader;