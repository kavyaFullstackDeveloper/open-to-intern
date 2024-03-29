Models

College Model
{ name: { mandatory, unique, example iith}, fullName: {mandatory, example `Indian Institute of Technology, Hyderabad`}, logoLink: {mandatory}, isDeleted: {boolean, default: false} }

Intern Model
{ name: {mandatory}, email: {mandatory, valid email, unique}, mobile: {mandatory, valid mobile number, unique}, collegeId: {ObjectId, ref to college model, isDeleted: {boolean, default: false}}

POST /colleges:
Create a college - a document for each member of the group

The logo link will be provided to you by the mentors. 
This link is a s3 (Amazon's Simple Service) url. Try accessing the link to see if the link is public or not.

Endpoint: BASE_URL/colleges

POST /interns:
Create a document for an intern.

Also save the collegeId along with the document. Your request body contains the following fields - { name, mobile, email, collegeName}

Return HTTP status 201 on a succesful document creation. Also return the document. The response should be a JSON object like this

Return HTTP status 400 for an invalid request with a response body like this

GET /collegeDetails
Returns the college details for the requested college (Expect a query parameter by the name collegeName. This is anabbreviated college name. For example iith)

Returns the list of all interns who have applied for internship at this college.
The response structure should look like this
