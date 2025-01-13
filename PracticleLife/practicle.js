// Mock data for the portal
const portalData = {
    assignments: ["Math Assignment 1", "Physics Assignment 2", "Chemistry Lab Report"],
    marks: {
        Math: 85,
        Physics: 90,
        Chemistry: 78,
    },
    courseDetails: ["Math 101", "Physics 102", "Chemistry 103"],
    users: ["Student A", "Student B", "Student C"], // Visible to management and dean
};

// General function to access the portal based on user role and permissions
function accessPortal() {
    console.log(`\nAccessing the portal as: ${user.role.toUpperCase()}`);

    // General Access (all users)
    if (user.permissions?.canViewAssignments) {
        console.log("Assignments:");
        console.log(portalData.assignments);
    }

    if (user.permissions?.canViewGrades) {
        console.log("Marks:");
        console.log(portalData.marks);
    }

    if (user.permissions?.canViewCourseMaterials) {
        console.log("Course Details:");
        console.log(portalData.courseDetails);
    }

    // Teacher-specific actions
    if (user.role === 'teacher') {
        if (user.permissions?.canAddAssignments) {
            console.log("You can add new assignments.");
        }

        if (user.permissions?.canModifyGrades) {
            console.log("You can modify student grades.");
        }

        if (user.permissions?.canModifyAssignments) {
            console.log("You can modify assignments.");
        }
    }

    // Management-specific actions
    if (user.role === 'management') {
        if (user.permissions?.canViewUserDetails) {
            console.log("User Details:");
            console.log(portalData.users);
        }
    }

    // Dean-specific actions
    if (user.role === 'dean') {
        if (user.permissions?.canModifyUserDetails) {
            console.log("You can modify user details.");
        }
        console.log("You have full access to the portal.");
    }

    // Student-specific actions
    if (user.role === 'student') {
        console.log("You have student access. You can only view data.");
    }
}

// Example 1: Teacher Object with permissions
const teacher = {
    role: 'teacher',
    permissions: {
        canViewAssignments: true,
        canViewGrades: true,
        canViewCourseMaterials: true,
        canAddAssignments: true,        // Teachers can add assignments
        canModifyGrades: true,          // Teachers can modify grades
        canModifyAssignments: true,     // Teachers can modify assignments
        canViewUserDetails: false,
        canModifyUserDetails: false,
    }
};
console.log("Teacher Access:");
user = teacher;
accessPortal();

console.log("\n");

// Example 2: Dean Object with permissions
const dean = {
    role: 'dean',
    permissions: {
        canViewAssignments: true,
        canViewGrades: true,
        canViewCourseMaterials: true,
        canAddAssignments: false,       // Dean cannot add assignments
        canModifyGrades: false,         // Dean cannot modify grades
        canModifyAssignments: false,    // Dean cannot modify assignments
        canViewUserDetails: true,       // Dean can view user details
        canModifyUserDetails: true,     // Dean can modify user details
    }
};
console.log("Dean Access:");
user = dean;
accessPortal();

console.log("\n");

// Example 3: Student Object with permissions
const student = {
    role: 'student',
    permissions: {
        canViewAssignments: true,
        canViewGrades: true,
        canViewCourseMaterials: true,
        canAddAssignments: false,       // Students cannot add assignments
        canModifyGrades: false,         // Students cannot modify grades
        canModifyAssignments: false,    // Students cannot modify assignments
        canViewUserDetails: false,
        canModifyUserDetails: false,
    }
};
console.log("Student Access:");
user = student;
accessPortal();
