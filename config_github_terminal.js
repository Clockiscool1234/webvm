// The root filesystem location
export const diskImageUrl = IMAGE_URL;
// The root filesystem backend type
export const diskImageType = "github";
// Print an introduction message about the technology
export const printIntro = true;
// Is a graphical display needed
export const needsDisplay = true;
// Executable full path (Required)
export const cmd = CMD; // Default: "/bin/bash";
// Arguments, as an array (Required)
export const args = ARGS; // Default: ["--login"];
// Optional extra parameters
export const opts = {
	// Environment variables
	env: ["HOME=/root", "TERM=xterm", "USER=user", "SHELL=/bin/bash", "EDITOR=vim", "LANG=en_US.UTF-8", "LC_ALL=C", "DISPLAY=:0"], // Default: ["HOME=/home/user", "TERM=xterm", "USER=user", "SHELL=/bin/bash", "EDITOR=vim", "LANG=en_US.UTF-8", "LC_ALL=C"],
	// Current working directory
	cwd: "/root", // Default: "/home/user",
	// User id
	uid: 0,
	// Group id
	gid: 0
};
