import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'
import { withRouter } from 'react-router-dom'

const styles = {
    textField: {
        width: '100%',
        marginBottom: 5
    },
    btnBlock: {
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 20
    }
}

class Register extends Component {
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            login: '',
            password: '',
            password2: '',
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }
    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit (e) {
        e.preventDefault()
        const userData = {
            email: this.state.email,
            login: this.state.login,
            password: this.state.password,
            password2: this.state.password2
        }

        this.props.registerUser(userData, this.props.history)
    }
    render() {
        const { classes } = this.props;
        const { errors } = this.state
        return (
            <Paper style={{padding: 15}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        type="email"
                        label="Email"
                        className={classes.textField}
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                        helperText={errors.email ? errors.email : ''}
                        error={errors.email ? true: false }
                    />
                    <TextField 
                        label="Login"
                        type="text"
                        name="login"
                        value={this.state.login}
                        onChange={this.handleChange}
                        className={classes.textField}
                        helperText={errors.login ? errors.login : ''}
                        error={errors.login ? true: false }
                    />
                    <TextField 
                        label="Password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        className={classes.textField}
                        helperText={errors.password ? errors.password : ''}
                        error={errors.password ? true: false }
                    />
                    <TextField 
                        label="Repeat Password"
                        type="password"
                        name="password2"
                        value={this.state.password2}
                        onChange={this.handleChange}
                        className={classes.textField}
                        helperText={errors.password2 ? errors.password2 : ''}
                        error={errors.password2 ? true: false }
                    />
                    <div className={classes.btnBlock}>
                        <button variant="outlined" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(withStyles(styles)(Register)))