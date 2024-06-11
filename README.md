
# bd-instituition-list-by-solutya

This is an npm package providing a comprehensive database of all institutes in Bangladesh. Whether you're building an educational app, conducting research, or simply need access to information about schools, colleges, or universities in Bangladesh, this package offers a convenient solution.


## Features

- Extensive Database: Access detailed information about schools, madrasa, colleges, and universities across Bangladesh.
- Easy Integration: Integrate seamlessly into your Node.js projects with simple API calls.
- Data Specificity: Tailored data fields for each institution type:
    - Schools: Includes "eiin" (Educational Institution Identification Number), "name", "institutionType", and "version".
    - Colleges: Includes "eiin", "name", and "institutionType".
    - Universities: Provides comprehensive details such as "name", "shortName", "institutionType", "category", and "department".
- Up-to-Date Information: Regularly updated database ensures you have the latest information at your fingertips.
- Flexible Searching: Search by institution parameters to find the information you need quickly.
## Installation

Install bd-instituition-list-by-solutya with npm

```bash
  npm i bd-instituition-list-by-solutya
```

## All Methods

All Institute Data:
```bash
getAllInstitute(),
getAllInstituteNames(),
getAllInstituteByType(),
getAllInstituteNameByType()
```
All School Data(Banga Medium School, English Medium School, Madrasa):
```bash
getAllSchools(),
getAllSchoolNames(),
getSchoolByEiin(),
getSchoolByName(),
getAllSchoolByVersion(),
getAllSchoolNameByVersion(),
getSchoolNameByEiin()
```
All College Data:
```bash
getAllCollege(),
getAllCollegeNames(),
getCollegeByEiin(),
getCollegeNameByEiin(),
getCollegeByName()
```
All University Data (Public, Private, National University):
```bash
getAllUnis(),
getAllUniNames(),
getUniByName(),
getUniByShortName(),
getUniNameByShortName(),
getAllUniByCategory(),
getAllUniNameByCategory(),
getAllUnisByDepartment(),
getAllUniNameByDepartment()
```


## Usage/Examples
Import from package
```javascript

import {getAllInstitute,
  getAllInstituteNames,
  getAllInstituteByType,
  getAllInstituteNameByType,

  getAllSchools,
  getAllSchoolNames,
  getSchoolByEiin,
  getSchoolByName,
  getAllSchoolByVersion,
  getAllSchoolNameByVersion,
  getSchoolNameByEiin,

  getAllCollege,
  getAllCollegeNames,
  getCollegeByEiin,
  getCollegeNameByEiin,
  getCollegeByName,

  getAllUnis,
  getAllUniNames,
  getUniByName,
  getUniByShortName,
  getUniNameByShortName,
  getAllUniByCategory,
  getAllUniNameByCategory,
  getAllUnisByDepartment,
  getAllUniNameByDepartment} from 'bd-instituition-list-by-solutya'
```
getAllInstitute();
```javascript

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getAllInstitute();
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item?.name}</p>
                <p>{item?.eiin}</p>
                <p>{item?.institutionType}</p>
            </>
        ))}
      </div>
  )
}
```
getAllInstituteNames();
```javascript

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getAllInstituteNames();
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item}</p>
            </>
        ))}
      </div>
  )
}
```
getAllInstituteByType('type'); //school, college, university
```javascript

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getAllInstituteByType('school')
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item?.name}</p>
                <p>{item?.eiin}</p>
                <p>{item?.institutionType}</p>
            </>
        ))}
      </div>
  )
}
```
getAllInstituteNameByType('type'); //school, college, university
```javascript

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getAllInstituteNameByType('school')
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item}</p>
            </>
        ))}
      </div>
  )
}
```
getAllSchools();
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getAllSchools();
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item?.name}</p>
                <p>{item?.eiin}</p>
                <p>{item?.institutionType}</p>
                <p>{item?.version}</p>
            </>
        ))}
      </div>
  )
}
```
getAllSchoolNames();
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getAllSchoolNames();
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item}</p>
            </>
        ))}
      </div>
  )
}
```
getSchoolByEiin(eiin);
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getSchoolByEiin(100012);
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item?.name}</p>
                <p>{item?.eiin}</p>
                <p>{item?.institutionType}</p>
                <p>{item?.version}</p>
            </>
        ))}
      </div>
  )
}
```
getSchoolNameByEiin(eiin);
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getSchoolNameByEiin(100012);
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item}</p>
            </>
        ))}
      </div>
  )
}
```
getSchoolByName(name);
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getSchoolByName('SHAHEED ALTAF MAHMUD SECONDARY SCHOOL');
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item?.name}</p>
                <p>{item?.eiin}</p>
                <p>{item?.institutionType}</p>
                <p>{item?.version}</p>
            </>
        ))}
      </div>
  )
}
```
getAllSchoolByVersion(version); //arabic, bangla, english
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getAllSchoolByVersion('arabic');
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item?.name}</p>
                <p>{item?.eiin}</p>
                <p>{item?.institutionType}</p>
                <p>{item?.version}</p>
            </>
        ))}
      </div>
  )
}
```
getAllSchoolNameByVersion(version); //arabic, bangla, english
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getAllSchoolNameByVersion('english');
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item}</p>
            </>
        ))}
      </div>
  )
}
```
getAllCollege();
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getAllCollege();
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item?.name}</p>
                <p>{item?.eiin}</p>
                <p>{item?.institutionType}</p>
            </>
        ))}
      </div>
  )
}
```
getAllCollegeNames();
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getAllCollegeNames();
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item}</p>
            </>
        ))}
      </div>
  )
}
```
getCollegeByEiin(eiin);
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await  getCollegeByEiin(109051);
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item?.name}</p>
                <p>{item?.eiin}</p>
                <p>{item?.institutionType}</p>
            </>
        ))}
      </div>
  )
}
```
getCollegeNameByEiin(eiin);
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getCollegeNameByEiin(109051);
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item}</p>
            </>
        ))}
      </div>
  )
}
```
getCollegeByName(name);
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getCollegeByName('SHAHAJUDDIN SARKER MODEL HIGHER SECONDARY SCHOOL');
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item?.name}</p>
                <p>{item?.eiin}</p>
                <p>{item?.institutionType}</p>
            </>
        ))}
      </div>
  )
}
```
getAllUnis();
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getAllUnis();
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item?.name}</p>
                <p>{item?.shortName}</p>
                <p>{item?.institutionType}</p>
                <p>{item?.category}</p>
                <p>{item?.department}</p>
            </>
        ))}
      </div>
  )
}
```
getAllUniNames();
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getAllUniNames();
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item}</p>
            </>
        ))}
      </div>
  )
}
```
getUniByName(name);
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getUniByName('University of Dhaka');
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item?.name}</p>
                <p>{item?.shortName}</p>
                <p>{item?.institutionType}</p>
                <p>{item?.category}</p>
                <p>{item?.department}</p>
            </>
        ))}
      </div>
  )
}
```
getUniByShortName(shortName);
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getUniByShortName('DU');
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item?.name}</p>
                <p>{item?.shortName}</p>
                <p>{item?.institutionType}</p>
                <p>{item?.category}</p>
                <p>{item?.department}</p>
            </>
        ))}
      </div>
  )
}
```
getUniNameByShortName(shortName);
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getUniNameByShortName('DU');
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item}</p>
            </>
        ))}
      </div>
  )
}
```
getAllUniByCategory(category); //public, private, nu
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getAllUniByCategory('public');
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item?.name}</p>
                <p>{item?.shortName}</p>
                <p>{item?.institutionType}</p>
                <p>{item?.category}</p>
                <p>{item?.department}</p>
            </>
        ))}
      </div>
  )
}
```
getAllUniNameByCategory(category);//public, private, nu
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getAllUniNameByCategory('private');
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item}</p>
            </>
        ))}
      </div>
  )
}
```
getAllUnisByDepartment(department); //general, engineering, medical, dental
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getAllUnisByDepartment('medical');
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item?.name}</p>
                <p>{item?.shortName}</p>
                <p>{item?.institutionType}</p>
                <p>{item?.category}</p>
                <p>{item?.department}</p>
            </>
        ))}
      </div>
  )
}
```
getAllUniNameByDepartment(department); //general, engineering, medical, dental
```javascript
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const result = await getAllUniNameByDepartment('general');
            setData(result);
        };
        getData();
    }, []);
  return (
      <div className="App">
      {data.map((item,index)=>(
            <>
                <p>{item}</p>
            </>
        ))}
      </div>
  )
}
```
## Authors
- [@solutya](https://www.solutya.com)

## Badges



[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)



## Acknowledgements
The data provided in this npm package is sourced from various publicly available data on the internet, primarily collected from Google search results. We extend our gratitude to the following sources for providing valuable information:
- Google
- Bangladesh Ministry of Education
- National University of Bangladesh.

We acknowledge the contributions of these entities in making educational data accessible and strive to maintain the accuracy and integrity of the information provided in this package.


## License

[MIT](https://choosealicense.com/licenses/mit/)


## 🔗Social Links
[![portfolio](https://img.shields.io/badge/facebook-0866ff?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/Solutya)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/solutya/)

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/SolutyaI)

[![instagram](https://img.shields.io/badge/instagram-F56040?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/solutyapvtltd)

[![youtube](https://img.shields.io/badge/youtube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@solutyait6991)

[![tiktok](https://img.shields.io/badge/tiktok-ff0050?style=for-the-badge&logo=tiktok&logoColor=white)](https://www.tiktok.com/@solutya.pvt..ltd)