const statusByCode = (code) => {
    return code ? <small className="text-am text-green-500"> Tassyklanan </small> : <small className="text-am text-red-500"> Tassyklanmadyk </small>
}

export default statusByCode