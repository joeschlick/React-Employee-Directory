import React from "react";
import TableHeader from "../TableHeader";

function TableBody(props) {
    return <table className="table table-dark">{props.children}</table>;
}

export default TableBody;