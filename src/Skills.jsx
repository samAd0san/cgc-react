function Skills(){
    const skills = ['Java','JavaScript','Python','Rust','Golang','HCL'];

    return <div>
    <h3>Courses</h3>
    <ul>
        { skills.map(skill => <li>{skill}</li>) }
    </ul>
</div>
}

export default Skills;