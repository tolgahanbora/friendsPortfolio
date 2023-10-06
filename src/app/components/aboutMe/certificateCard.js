import React from 'react';


function CertificateCard({ title, number, author, date }) {
  return (
    <div className="borders">
      <div className="ml-12 rectangle">
        <div className="font-bold numberText">{number}</div>
      </div>
      <div className="content">
        <h8 className="font-bold certificatesDate">{title}</h8>
        <p className="font-semibold certificatesText">{author}</p>
      </div>
      <div className="font-bold yearStyle">{date}</div>
    </div>
  );
}

export default CertificateCard;
