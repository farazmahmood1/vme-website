import React from 'react'

const PreLoader = () => {
    return (
        <div>
            <div className="js-preloader">
                <div className="preloader-inner">
                    <span className="dot" />
                    <div className="dots">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreLoader