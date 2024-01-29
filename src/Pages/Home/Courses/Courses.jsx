import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useCourses from "../../../Hooks/useCourses";
import AllCoursesTab from "./AllCoursesTab";


const Courses = () => {
    const [courses] = useCourses();

    const reactNativ = courses.filter(item => item.name === 'Introduction to React Native')
    const webDevelopment = courses.filter(item => item.name === 'Web Development')
    const communicationSkills = courses.filter(item => item.name === 'Communication Skills')
    const digitalMarketing = courses.filter(item => item.name === 'Digital Marketing')
    const graphicDesign = courses.filter(item => item.name === 'Graphic Design')
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center">Discover top courses.</h1>
                <p className="text-center my-2">Select the course of your choice and begin your online learning journey</p>
            </div>
            <div className="mt-5">
                <Tabs>
                    <TabList className="mx-auto text-center space-x-5 bg-gradient-to-r from-sky-50 to-indigo-50 p-3">
                        <Tab>React Native</Tab>
                        <Tab>Web Development</Tab>
                        <Tab>Communication Skills</Tab>
                        <Tab>Digital Marketing</Tab>
                        <Tab>Graphic Design</Tab>
                    </TabList>
                    <TabPanel>
                        <AllCoursesTab
                            coursesName={reactNativ}
                        ></AllCoursesTab>
                    </TabPanel>

                    <TabPanel>
                        <AllCoursesTab
                            coursesName={webDevelopment}
                        ></AllCoursesTab>
                    </TabPanel>

                    <TabPanel>
                        <AllCoursesTab
                            coursesName={communicationSkills}
                        ></AllCoursesTab>
                    </TabPanel>

                    <TabPanel>
                        <AllCoursesTab
                            coursesName={digitalMarketing}
                        ></AllCoursesTab>
                    </TabPanel>

                    <TabPanel>
                        <AllCoursesTab
                            coursesName={graphicDesign}
                        ></AllCoursesTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Courses;