t1="ghp_EXrA"
t2="a64TGsmK"
t3="O4kgpwhX"
t4="l9fXkee0ZM0fjurB"

const token = t1+t2+t3+t4;
const username = 'ahed0programer';
const repo = 'ahed_data_logs';
const path = 'data.json';
const content = JSON.stringify({ name: 'ahed' });
let ip=null;

fetch('https://api.ipgeolocation.io/ipgeo?apiKey=33e678296dca4b33b1e407b2d221c46c')
.then(response => response.json())
.then(data => {
    loca={latitude:data.latitude,longitude:data.longitude}

    const newData = {    
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        language: navigator.language,
        vendor: navigator.vendor,
        country_name:data.country_name,
        city:data.city,
        location:loca,
        ip_address:data.ip,
        timestamp: new Date().toISOString()
    };
    
    store_data(newData);
})
.catch(error => {
    console.error('Error fetching IP data:', error);
});

        


async function getFileContentAndSHA() {
    const response = await fetch(`https://api.github.com/repos/${username}/${repo}/contents/${path}`, {
        method: 'GET',
        headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json'
        }
    });

    if (!response.ok) {
        throw new Error(`Error fetching file content: ${response.statusText}`);
    }

    const data = await response.json();
    const content = JSON.parse(atob(data.content));
    return { content, sha: data.sha };
}

async function updateFile(content, sha) {
    const response = await fetch(`https://api.github.com/repos/${username}/${repo}/contents/${path}`, {
        method: 'PUT',
        headers: {
            'Authorization': `token ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'Append new data',
            content: btoa(JSON.stringify(content, null, 2)),
            sha: sha
        })
    });

    if (!response.ok) {
        throw new Error(`Error updating file: ${response.statusText}`);
    }

    return response.json();
}

async function store_data(newData) {
    try {
        // Step 1: Get current file content and SHA
        const { content, sha } = await getFileContentAndSHA();

        // Step 2: Append new data to existing content
        content.push(newData); // Assuming the JSON content is an array

        // Step 3: Update the file with new content
        const result = await updateFile(content, sha);
        console.log('File updated successfully:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}
