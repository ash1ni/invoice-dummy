import React from "react";
import styled from "styled-components";

export const InvoiceContainerRootRoot1 = function ({ }) {
  const DeleteButtonFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const UploadClientsButtonFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const AddClientButtonFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <InvoiceContainerRootRoot>
      <InvoiceGroup>
        <InvoiceEllipse>
          <InvoiceVectorPrimary src="https://file.rendit.io/n/g4qhQkOC8rxUywLcpMZZ.svg" />
          <InvoiceVectorSecondary src="https://file.rendit.io/n/euUrHKvEA6JdPqqxWvfI.svg" />
        </InvoiceEllipse>
        <InvoiceRectangle>
          <InvoiceCreateNewFolder>
            <InvoiceVectorPrimary1 src="https://file.rendit.io/n/6sJXcXGOvRetONZxTQub.svg" />
            <InvoiceVectorSecondary1 src="https://file.rendit.io/n/CKWQZHjz5oPRmRTA0lXe.svg" />
          </InvoiceCreateNewFolder>
          <InvoiceDocumentGeneration>
            Document Generation
          </InvoiceDocumentGeneration>
        </InvoiceRectangle>
        <InvoiceDocumentDetails>
          <InvoiceGroup1>
            <InvoicePath>
              <InvoicePath1 src="https://file.rendit.io/n/1Me5931sbZ4cnh6CbXJU.svg" />
            </InvoicePath>
            <InvoicePath2 src="https://file.rendit.io/n/0xHw86POJKvQMG4lfxq4.svg" />
          </InvoiceGroup1>
          <Rectangle>
            <Frame1>
              <G>G</G>
            </Frame1>
            <Group>
              <EntityName>Entity Name</EntityName>
              <AddWebsite>Add website</AddWebsite>
            </Group>
            <Ellipse>
              <Vector src="https://file.rendit.io/n/wr9A6rNxlJVgeC7nQ7GH.svg" />
            </Ellipse>
          </Rectangle>
          <InvoiceGroup2>
            <InvoiceVector src="https://file.rendit.io/n/oVDjPzCDRoIPwpHNDhwe.svg" />
            <InvoiceDocumentGeneration1>
              Document Generation
            </InvoiceDocumentGeneration1>
          </InvoiceGroup2>
          <InvoiceGroup3>
            <InvoiceVectorPrimary2 src="https://file.rendit.io/n/2UKQt6u8rLCAWZPAl7t2.svg" />
            <InvoiceDocumentStorage>Document Storage</InvoiceDocumentStorage>
            <InvoiceVectorSecondary2 src="https://file.rendit.io/n/ZSUukfONKrPSLbvCK2sy.svg" />
          </InvoiceGroup3>
          <InvoiceGroup4>
            <InvoiceVectorPrimary3 src="https://file.rendit.io/n/lvL82HcR2B4RR6sOFeKD.svg" />
            <InvoiceManagement>Invoice Management</InvoiceManagement>
            <InvoiceVectorSecondary3 src="https://file.rendit.io/n/fSUnNJpXuymhzrtPe1fi.svg" />
          </InvoiceGroup4>
          <NewInvoiceButton>New Invoice</NewInvoiceButton>
          <InvoiceSummaryButton>Invoice Summary</InvoiceSummaryButton>
          <InvoiceGroup5>
            <ClientListButton>Client List</ClientListButton>
            <InvoiceRectangle1 />
          </InvoiceGroup5>
        </InvoiceDocumentDetails>
      </InvoiceGroup>
      <InvoiceGroup6>
        <InvoiceGroup7>
          <InvoiceSummaryButton1>Invoice Summary</InvoiceSummaryButton1>
          <InvoiceEllipse1>
            <AElement>A</AElement>
          </InvoiceEllipse1>
        </InvoiceGroup7>
        <InvoiceClientDetails>
          <InvoiceGroup8>
            <ActiveClientsButton>Active Clients</ActiveClientsButton>
            <DeletedClientsButton>Deleted Clients</DeletedClientsButton>
          </InvoiceGroup8>
          <DeleteButton
            onClick={(e) => DeleteButtonFunction(e, "DeleteButton")}
          >
            <DeleteButtonText>Delete</DeleteButtonText>
          </DeleteButton>
          <InvoiceRectangle2>
            <InvoiceRectangle3 />
            <ClientNameText>Client Name</ClientNameText>
            <PhoneText>Phone</PhoneText>
            <EmailText>Email</EmailText>
            <GSTINTaxIDText>GSTIN/Tax ID</GSTINTaxIDText>
            <PANText>PAN</PANText>
            <CountryText>Country</CountryText>
          </InvoiceRectangle2>
          <InvoiceGroup9>
            <InvoiceRectangle4 />
            <CompanyName>Astu Technologies Private Limited</CompanyName>
            <Phone>+918934834069</Phone>
            <Email>akshay.kota16@gmail.com</Email>
            <MinusIcon>-</MinusIcon>
            <MinusIcon1>-</MinusIcon1>
            <IndiaText>India</IndiaText>
            <InvoiceGroup10>
              <InvoiceVectorPrimary4 src="https://file.rendit.io/n/fUwq6rSW566JX92iKFcK.svg" />
              <EditButton>Edit</EditButton>
            </InvoiceGroup10>
            <InvoiceGroup11>
              <InvoiceVectorPrimary5 src="https://file.rendit.io/n/jrrAK5tdrAJOtDLxZ3Vl.svg" />
              <CreateInvoiceButton>Create Invoice</CreateInvoiceButton>
            </InvoiceGroup11>
            <InvoiceGroup12>
              <InvoiceVectorPrimary6 src="https://file.rendit.io/n/S1e6PmUSCu4XA8rFDCac.svg" />
              <CreateInvoiceButton>Delete</CreateInvoiceButton>
            </InvoiceGroup12>
          </InvoiceGroup9>
          <InvoiceLine />
          <InvoiceGroup13>
            <InvoiceRectangle4 />
            <CompanyName1>XYZ Technologies Private Limited</CompanyName1>
            <Phone1>+918934834069</Phone1>
            <Phone>akshay93jaiswal@gmail.com</Phone>
            <Phone>ABCDEFGHIJKLMNO</Phone>
            <PANText1>ABCDEFGHIJ</PANText1>
            <IndiaText>USA</IndiaText>
            <InvoiceGroup14>
              <InvoiceVectorPrimary4 src="https://file.rendit.io/n/fUwq6rSW566JX92iKFcK.svg" />
              <EditButton>Edit</EditButton>
            </InvoiceGroup14>
            <InvoiceGroup15>
              <InvoiceVectorPrimary5 src="https://file.rendit.io/n/jrrAK5tdrAJOtDLxZ3Vl.svg" />
              <CreateInvoiceButton>Create Invoice</CreateInvoiceButton>
            </InvoiceGroup15>
            <InvoiceGroup16>
              <InvoiceVectorPrimary6 src="https://file.rendit.io/n/S1e6PmUSCu4XA8rFDCac.svg" />
              <CreateInvoiceButton>Delete</CreateInvoiceButton>
            </InvoiceGroup16>
          </InvoiceGroup13>
          <InvoiceLine1 />
          <InvoiceGroup17>
            <InvoiceRectangle4 />
            <CompanyName2>ABC Technologies Private Limited</CompanyName2>
            <Phone1>+918934834069</Phone1>
            <Phone>akshay93jaiswal@gmail.com</Phone>
            <Phone>ABCDEFGHIJKLMNO</Phone>
            <PANText1>ABCDEFGHIJ</PANText1>
            <IndiaText1>India</IndiaText1>
            <InvoiceGroup14>
              <InvoiceVectorPrimary4 src="https://file.rendit.io/n/fUwq6rSW566JX92iKFcK.svg" />
              <EditButton>Edit</EditButton>
            </InvoiceGroup14>
            <InvoiceGroup19>
              <InvoiceVectorPrimary5 src="https://file.rendit.io/n/jrrAK5tdrAJOtDLxZ3Vl.svg" />
              <CreateInvoiceButton>Create Invoice</CreateInvoiceButton>
            </InvoiceGroup19>
            <InvoiceGroup16>
              <InvoiceVectorPrimary6 src="https://file.rendit.io/n/S1e6PmUSCu4XA8rFDCac.svg" />
              <CreateInvoiceButton>Delete</CreateInvoiceButton>
            </InvoiceGroup16>
          </InvoiceGroup17>
          <InvoiceLine1 />
          <InvoiceGroup21>
            <InvoiceRectangle4 />
            <CompanyName2>ABC Technologies Private Limited</CompanyName2>
            <Phone1>+918934834069</Phone1>
            <Phone>akshay93jaiswal@gmail.com</Phone>
            <Phone>ABCDEFGHIJKLMNO</Phone>
            <PANText1>ABCDEFGHIJ</PANText1>
            <IndiaText1>India</IndiaText1>
            <InvoiceGroup14>
              <InvoiceVectorPrimary4 src="https://file.rendit.io/n/fUwq6rSW566JX92iKFcK.svg" />
              <EditButton>Edit</EditButton>
            </InvoiceGroup14>
            <InvoiceGroup19>
              <InvoiceVectorPrimary5 src="https://file.rendit.io/n/jrrAK5tdrAJOtDLxZ3Vl.svg" />
              <CreateInvoiceButton>Create Invoice</CreateInvoiceButton>
            </InvoiceGroup19>
            <InvoiceGroup16>
              <InvoiceVectorPrimary6 src="https://file.rendit.io/n/S1e6PmUSCu4XA8rFDCac.svg" />
              <CreateInvoiceButton>Delete</CreateInvoiceButton>
            </InvoiceGroup16>
          </InvoiceGroup21>
        </InvoiceClientDetails>
        <InvoiceGroup25>
          <UploadClientsButton
            onClick={(e) => UploadClientsButtonFunction(e, "UploadClientsButton")}
          >
            <UploadClientsButtonText>Upload clients</UploadClientsButtonText>
          </UploadClientsButton>
          <AddClientButton
            onClick={(e) => AddClientButtonFunction(e, "AddClientButton")}
          >
            <AddClientButtonText>Add Client</AddClientButtonText>
          </AddClientButton>
        </InvoiceGroup25>
      </InvoiceGroup6>
    </InvoiceContainerRootRoot>
  );
};

const InvoiceRectangle4 = styled.div`
  width: 1.88%;
  height: 18px;
  margin: 5px 1.17px 0px 0px;
  border-width: 2px;
  border-radius: 3px;
  border-style: solid;
  border-color: #b5bbc5;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const Phone = styled.div`
  margin: 1px 1.17px 0px 0px;
  color: #757575;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const IndiaText = styled.div`
  margin: 1px 56.2px 0px 0px;
  color: #757575;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const InvoiceVectorPrimary4 = styled.img`
  width: 85.95%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: flex-end;
  box-sizing: border-box;
`;
const EditButton = styled.div`
  color: #757575;
  font-size: 12px;
  font-family: Nunito Sans;
  line-height: 16px;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
`;
const InvoiceVectorPrimary5 = styled.img`
  width: 23.95%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  box-sizing: border-box;
`;
const CreateInvoiceButton = styled.div`
  align-self: stretch;
  color: #757575;
  font-size: 12px;
  font-family: Nunito Sans;
  line-height: 16px;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
`;
const InvoiceVectorPrimary6 = styled.img`
  width: 44.44%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  margin: 0px 9px 0px 0px;
  box-sizing: border-box;
`;
const Phone1 = styled.div`
  margin: 3px 1.17px 0px 0px;
  color: #757575;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const PANText1 = styled.div`
  margin: 1px 2.17px 0px 0px;
  color: #757575;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const InvoiceGroup14 = styled.div`
  width: 2.21%;
  gap: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 7px 0px 0px 0px;
  box-sizing: border-box;
`;
const InvoiceGroup16 = styled.div`
  width: 3.76%;
  gap: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 4px 0px 0px 0px;
  box-sizing: border-box;
`;
const InvoiceLine1 = styled.div`
  width: 100%;
  height: 1px;
  flex-shrink: 0;
  align-self: center;
  margin: 0px 0px 2px 0px;
  border-width: 1px 0px 0px 0px;
  border-style: solid;
  border-color: #f5f5f5;
  box-sizing: border-box;
`;
const CompanyName2 = styled.div`
  width: 9.92%;
  margin: 0px 31.2px 0px 0px;
  color: #757575;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  box-sizing: border-box;
`;
const IndiaText1 = styled.div`
  margin: 1px 54.2px 0px 0px;
  color: #757575;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const InvoiceGroup19 = styled.div`
  width: 7.94%;
  gap: 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 3px 2.17px 0px 0px;
  box-sizing: border-box;
`;
const InvoiceContainerRootRoot = styled.div`
  gap: 33px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  background-color: #ffffff;
  overflow: hidden;
`;
const InvoiceGroup = styled.div`
  width: 20.65%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
`;
const InvoiceEllipse = styled.div`
  width: 34px;
  left: 32px;
  top: 1051px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 4.5px 4.84px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/b4n8YhImBLNiQENJTSYO.svg");
`;
const InvoiceVectorPrimary = styled.img`
  width: 53.53%;
  min-width: 0px;
  height: 20px;
  min-height: 0px;
  left: 7.90203857421875px;
  top: 7.002105712890625px;
  position: absolute;
  box-sizing: border-box;
`;
const InvoiceVectorSecondary = styled.img`
  width: 99.92%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  position: relative;
  box-sizing: border-box;
`;
const InvoiceRectangle = styled.div`
  width: 92.29%;
  height: 50px;
  left: 13px;
  top: 158px;
  position: absolute;
  gap: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 21px;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: rgba(17, 97, 214, 0);
`;
const InvoiceCreateNewFolder = styled.div`
  width: 20px;
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
`;
const InvoiceVectorPrimary1 = styled.img`
  width: 80%;
  min-width: 0px;
  height: 12px;
  min-height: 0px;
  left: 2px;
  top: 2px;
  position: absolute;
  box-sizing: border-box;
`;
const InvoiceVectorSecondary1 = styled.img`
  width: 100%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  position: relative;
  box-sizing: border-box;
`;
const InvoiceDocumentGeneration = styled.div`
  color: #f5f5f5;
  font-size: 20px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  text-transform: capitalize;
  box-sizing: border-box;
`;
const InvoiceDocumentDetails = styled.div`
  width: 100%;
  position: relative;
  gap: 19px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px 24px 533px 24px;
  box-sizing: border-box;
  background-color: #00204e;
`;
const InvoiceGroup1 = styled.div`
  width: 180px;
  gap: 5.88px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 27px 2px;
  box-sizing: border-box;
`;
const InvoicePath = styled.div`
  width: 51%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 13.3px 30.8px 0.35px 30.8px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/lsyhaFe71wBrbCd0qI60.svg");
`;
const InvoicePath1 = styled.img`
  width: 24.05%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  box-sizing: border-box;
`;
const InvoicePath2 = styled.img`
  width: 48.99%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  margin: 0.06px 0px 0px 0px;
  box-sizing: border-box;
`;
const Rectangle = styled.div`
  width: 100%;
  gap: 22px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-end;
  margin: 0px 0px 38px 0px;
  padding: 15px 20px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: rgba(17, 97, 214, 0.05);
`;
const Frame1 = styled.div`
  width: 19.27%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0px 0px 8px 0px;
  padding: 2px 8px;
  border-width: 1px;
  border-radius: 6.5px;
  border-style: solid;
  border-color: #ffffff;
  box-sizing: border-box;
  background-color: #ffffff;
`;
const G = styled.div`
  color: #1061d6;
  font-size: 32px;
  font-weight: 700;
  font-family: Nunito Sans;
  line-height: 36px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const Group = styled.div`
  width: 61.01%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 7px 15px 0px 0px;
  padding: 25px 0px 0px 0px;
  box-sizing: border-box;
`;
const EntityName = styled.div`
  width: 100%;
  height: 54.55%;
  left: 0px;
  top: 0px;
  position: absolute;
  color: #f5f5f5;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  box-sizing: border-box;
`;
const AddWebsite = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: #f5f5f5;
  font-size: 14px;
  font-family: Public Sans;
  line-height: 18px;
  text-decoration-line: underline;
  box-sizing: border-box;
`;
const Ellipse = styled.div`
  width: 12.84%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
  align-items: flex-start;
  padding: 5.67px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/fp1oZnFNuvWI79ybyJkU.svg");
`;
const Vector = styled.img`
  width: 100.2%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  box-sizing: border-box;
`;
const InvoiceGroup2 = styled.div`
  width: 193px;
  gap: 19.1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 25px 22px;
  box-sizing: border-box;
`;
const InvoiceVector = styled.img`
  width: 9.2%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  box-sizing: border-box;
`;
const InvoiceDocumentGeneration1 = styled.div`
  color: #f5f5f5;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const InvoiceGroup3 = styled.div`
  width: 256px;
  gap: 15.1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 22px 18px;
  box-sizing: border-box;
`;
const InvoiceVectorPrimary2 = styled.img`
  width: 10.63%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  margin: 2px 0px 0px 0px;
  box-sizing: border-box;
`;
const InvoiceDocumentStorage = styled.div`
  margin: 0px 54.8px 0px 0px;
  color: #f5f5f5;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const InvoiceVectorSecondary2 = styled.img`
  width: 5.32%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  align-self: flex-end;
  margin: 0px 0px 6px 0px;
  box-sizing: border-box;
`;
const InvoiceGroup4 = styled.div`
  width: 254px;
  gap: 19px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 20px 19.9px;
  box-sizing: border-box;
`;
const InvoiceVectorPrimary3 = styled.img`
  width: 8.43%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  box-sizing: border-box;
`;
const InvoiceManagement = styled.div`
  margin: 0px 36.8px 0px 0px;
  color: #f5f5f5;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const InvoiceVectorSecondary3 = styled.img`
  width: 5.56%;
  min-width: 0px;
  max-width: 100%;
  min-height: 0px;
  margin: 6px 0px 0px 0px;
  box-sizing: border-box;
`;
const NewInvoiceButton = styled.div`
  margin: 0px 0px 14px 57px;
  color: #f5f5f5;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const InvoiceSummaryButton = styled.div`
  margin: 0px 0px 0px 57px;
  color: #f5f5f5;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const InvoiceGroup5 = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  box-sizing: border-box;
`;
const ClientListButton = styled.div`
  width: 73px;
  height: 20px;
  left: 57px;
  top: 14px;
  position: absolute;
  color: #f5f5f5;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const InvoiceRectangle1 = styled.div`
  width: 100%;
  height: 52px;
  position: relative;
  flex-shrink: 0;
  border-radius: 6px;
  box-sizing: border-box;
  background-color: rgba(17, 97, 214, 0.2);
`;
const InvoiceGroup6 = styled.div`
  width: 77.46%;
  gap: 29px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-end;
  margin: 0px 0px 22px 0px;
  box-sizing: border-box;
`;
const InvoiceGroup7 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 3px 0px;
  box-sizing: border-box;
`;
const InvoiceSummaryButton1 = styled.div`
  margin: 12px 0px 0px 0px;
  color: #323232;
  font-size: 20px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  text-transform: capitalize;
  box-sizing: border-box;
`;
const InvoiceEllipse1 = styled.div`
  width: 3.43%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px 15px 11px 15px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/dkbnhSmoUMBiih0CupEU.svg");
`;
const AElement = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  font-family: Nunito Sans;
  line-height: 24px;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
`;
const InvoiceClientDetails = styled.div`
  width: 100%;
  gap: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 49px 32px 228px 32px;
  border-radius: 12px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 4px 53px 0px rgba(204, 204, 204, 0.3);
`;
const InvoiceGroup8 = styled.div`
  width: 270px;
  gap: 58px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 34px 0px;
  box-sizing: border-box;
`;
const ActiveClientsButton = styled.div`
  color: #1061d6;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  text-transform: capitalize;
  box-sizing: border-box;
`;
const DeletedClientsButton = styled.div`
  color: #b5bbc5;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  text-transform: capitalize;
  box-sizing: border-box;
`;
const DeleteButton = styled.button`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 0px 6px 0px;
  padding: 0px;
  padding-top: 11px;
  padding-right: 25px;
  padding-bottom: 11px;
  padding-left: 25px;
  border-width: 0px;
  border-radius: 8px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-style: solid;
  border-color: #b5bbc5;
  box-sizing: content-box;
  background-color: #ffffff;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const DeleteButtonText = styled.div`
  color: #757575;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
  text-transform: capitalize;
  box-sizing: border-box;
`;
const InvoiceRectangle2 = styled.div`
  width: 100%;
  gap: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
  align-items: flex-end;
  padding: 21px 14px;
  box-sizing: border-box;
  background-color: #f5f5f5;
`;
const InvoiceRectangle3 = styled.div`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  margin: 0px 0px 2px 0px;
  border-width: 2px;
  border-radius: 3px;
  border-style: solid;
  border-color: #b5bbc5;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
`;
const ClientNameText = styled.div`
  margin: 4px 35px 0px 0px;
  color: #323232;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const PhoneText = styled.div`
  margin: 0px 79px 0px 0px;
  color: #323232;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const EmailText = styled.div`
  margin: 0px 168px 0px 0px;
  color: #323232;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const GSTINTaxIDText = styled.div`
  margin: 0px 55px 0px 0px;
  color: #323232;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const PANText = styled.div`
  margin: 0px 64px 0px 0px;
  color: #323232;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const CountryText = styled.div`
  color: #323232;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const InvoiceGroup9 = styled.div`
  width: 97.6%;
  gap: 28.8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 4.5px 14px;
  box-sizing: border-box;
`;
const CompanyName = styled.div`
  width: 9.9%;
  align-self: flex-end;
  margin: 1px 31.2px 0px 0px;
  color: #757575;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  box-sizing: border-box;
`;
const Email = styled.div`
  margin: 0px 18.2px 0px 0px;
  color: #757575;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const MinusIcon = styled.div`
  margin: 1px 147px 0px 0px;
  color: #757575;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const MinusIcon1 = styled.div`
  margin: 2px 91.2px 0px 0px;
  color: #757575;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;
const InvoiceGroup10 = styled.div`
  width: 2.21%;
  gap: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 9px 0px 0px 0px;
  box-sizing: border-box;
`;
const InvoiceGroup11 = styled.div`
  width: 7.92%;
  gap: 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 5px 2.17px 0px 0px;
  box-sizing: border-box;
`;
const InvoiceGroup12 = styled.div`
  width: 3.75%;
  gap: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 6px 0px 0px 0px;
  box-sizing: border-box;
`;
const InvoiceLine = styled.div`
  width: 100%;
  height: 1px;
  flex-shrink: 0;
  align-self: center;
  margin: 0px 0px 1.5px 0px;
  border-width: 1px 0px 0px 0px;
  border-style: solid;
  border-color: #f5f5f5;
  box-sizing: border-box;
`;
const InvoiceGroup13 = styled.div`
  width: 97.52%;
  gap: 28.8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 5px 14px;
  box-sizing: border-box;
`;
const CompanyName1 = styled.div`
  width: 9.91%;
  margin: 0px 31.2px 0px 0px;
  color: #757575;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  box-sizing: border-box;
`;
const InvoiceGroup15 = styled.div`
  width: 7.93%;
  gap: 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 3px 2.17px 0px 0px;
  box-sizing: border-box;
`;
const InvoiceGroup17 = styled.div`
  width: 97.44%;
  gap: 28.8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 5px 14px;
  box-sizing: border-box;
`;
const InvoiceGroup21 = styled.div`
  width: 97.44%;
  gap: 28.8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 0px 14px;
  box-sizing: border-box;
`;
const InvoiceGroup25 = styled.div`
  width: 378px;
  gap: 18px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  align-items: flex-start;
  box-sizing: border-box;
`;
const UploadClientsButton = styled.button`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  padding-top: 11px;
  padding-right: 35.5px;
  padding-bottom: 11px;
  padding-left: 35.5px;
  border-width: 0px;
  border-radius: 8px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-style: solid;
  border-color: #1061d6;
  box-sizing: content-box;
  background-color: #ffffff;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const UploadClientsButtonText = styled.div`
  color: #1061d6;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
  text-transform: capitalize;
  box-sizing: border-box;
`;
const AddClientButton = styled.button`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  padding-top: 12px;
  padding-right: 51.5px;
  padding-bottom: 12px;
  padding-left: 51.5px;
  border-width: 0px;
  border-radius: 8px;
  box-sizing: content-box;
  background-color: #1061d6;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const AddClientButtonText = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-family: Nunito Sans;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
  text-transform: capitalize;
  box-sizing: border-box;
`;
