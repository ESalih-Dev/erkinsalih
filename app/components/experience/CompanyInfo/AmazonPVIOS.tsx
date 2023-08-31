import { CompanyInfo } from '~/components/experience/CompanyInfo/CompanyInfo'

const description = (
    <>
        <p>
            The goal of my placement was to better understand customer pain
            points as they used the Prime Video iOS app. To identify performance
            issue I built a profiler dedicated to collecting anonymised customer
            performance metrics (fps/CPU performance/RAM usage) as customers
            navigated screens and interacted with pages. This project formed the
            basis of a larger movement to better understand performance faults
            which can affect customer satisfaction but not to the extent of
            customers contacting CS.
        </p>
        <p>
            To ingest metrics we used a serverless backend in AWS using Cognito,
            Lambda, Aurora and S3. The data was presented in a React front-end
            displaying real-time graph data as customers interacted with the
            app.
        </p>
    </>
)

export const AmazonPVIOS: CompanyInfo = {
    id: 'AmazonPVIOS',
    logoUrl:
        'https://res.cloudinary.com/erkinsalih/image/upload/f_auto,q_auto/tqx9hehojb7pdfyjdgr8',
    companyName: 'Amazon',
    companyUrl: 'https://apps.apple.com/us/app/amazon-prime-video/id545519333',
    team: 'Prime Video iOS',
    companySize: '10,0001+',
    role: 'Full Stack Engineer - Placement',
    tenure: 6,
    tenureDates: 'Apr 2018 - Sep 2018',
    linkedInUrl: 'https://www.linkedin.com/company/amazon/',
    technologies: ['Swift', 'Objective-C', 'React'],
    description,
}
