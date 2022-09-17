class Lawyer {
  constructor(lawyer) {
    this.lawyerId = lawyer[0].stringValue;
    this.name = lawyer[1].stringValue;
    this.speciality = lawyer[2].stringValue;
    this.experience = lawyer[3].longValue;
    this.rating = lawyer[4].longValue;
    this.address = lawyer[5].stringValue;
    this.videoConsultationFee = lawyer[6].longValue;
    this.officeConsultationFee = lawyer[7].longValue;
    this.isAvailableOnline = lawyer[8].booleanValue;
    this.verified = lawyer[9].booleanValue;
    this.profilePictureS3URL = lawyer[10].stringValue;
  }
}

/*lawyer_name
speciality
experience
rating
address
videoConsultationFee
officeConsultationFee
isAvailableOnline
verified
profilePictureS3URL
qualifications
description
officeID
name
location
logoS3URL
contactNumber
consultationFee
lawyerID
type
date
times
byUser
toLawyer
title
body
appointmentType
reviewType
reply
repliedAt
postedOn
services
*/

class ViewLawyer{
    constructor(lawyer){
        this.lawyer_name = lawyer[0].stringValue;
        this.speciality = lawyer[1].stringValue;
        this.experience = lawyer[2].longValue;
        this.rating = lawyer[3].longValue;
        this.address = lawyer[4].stringValue;
        this.videoConsultationFee = lawyer[5].longValue;
        this.officeConsultationFee = lawyer[6].longValue;
        this.isAvailableOnline = lawyer[7].booleanValue;
        this.verified = lawyer[8].booleanValue;
        this.profilePictureS3URL = lawyer[9].stringValue;
        this.qualifications = lawyer[10].stringValue;
        this.description = lawyer[11].stringValue;
        this.officeID = lawyer[12].stringValue;
        this.officeName = lawyer[13].stringValue;
        this.officeLocation = lawyer[14].stringValue;
        this.officeLogoS3URL = lawyer[15].stringValue;
        this.officeContactNumber = lawyer[16].stringValue;
        this.officeConsultationFee = lawyer[17].longValue;
        this.lawyerID = lawyer[18].stringValue;
        this.type = lawyer[19].stringValue;
        this.date = lawyer[20].stringValue;
        this.times = lawyer[21].stringValue;
        this.byUser = lawyer[22].stringValue;
        this.toLawyer = lawyer[23].stringValue;
        this.title = lawyer[24].stringValue;
        this.body = lawyer[25].stringValue;
        this.appointmentType = lawyer[26].stringValue;
        this.reviewType = lawyer[27].stringValue;
        this.reply = lawyer[28].stringValue;
        this.repliedAt = lawyer[29].stringValue;
        this.postedOn = lawyer[30].stringValue;
        this.services = lawyer[31].stringValue;
    }
}

module.exports = {Lawyer, ViewLawyer};
