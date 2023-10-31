function onChangeHeadCommission() {
  var HeadCommission = EdocsApi.getAttributeValue("HeadCommission").value;
  if (HeadCommission) {
    var employee = EdocsApi.getEmployeeDataByEmployeeID(HeadCommission);
    EdocsApi.setAttributeValue({
      code: "Position",
      value: employee.positionName,
    });
    EdocsApi.setAttributeValue({
      code: "TelephoneCus",
      value: employee.phone,
    });
  } else {
    EdocsApi.setAttributeValue({
      code: "Position",
      value: "",
    });
    EdocsApi.setAttributeValue({
      code: "TelephoneCus",
      value: "",
    });
  }
}
