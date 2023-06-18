import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import classnames from 'classnames';
import Alert from './Alerts';

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap';

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [alert, setAlert] = useState<{
    color: string;
    icon: string;
    message: string;
  } | null>(null);

  const successAlert = {
    color: 'success',
    icon: 'ni ni-like-2',
    message: ' Your message has been sent successfully!',
  };

  const errorAlert = {
    color: 'danger',
    icon: 'ni ni-like-2',
    message: ' Your message has been sent successfully!',
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitting');

    console.log(form.current);

    const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

    const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (
      emailJsServiceId &&
      emailJsTemplateId &&
      emailJsPublicKey &&
      form.current
    ) {
      emailjs
        .sendForm(
          emailJsServiceId,
          emailJsTemplateId,
          form.current,
          emailJsPublicKey
        )
        .then(
          (result) => {
            console.log(result.text);
            setAlert(successAlert);
          },
          (error) => {
            console.log(error.text);
            setAlert(successAlert);
          }
        );
    }
  };

  return (
    <>
  <div id="move">
  <center>
    <h1 className=''>Django Full Stack Development</h1>
  </center>
    <br />
    <div className="ml-8 mr-8 flex gap-x-8" id="">
    <button className="" id="javascripth">google colab</button>&larr;
    <button className="" id="javascripth">jupyter lab</button>&larr;
    <button className="" id="javascript">spider lab</button>&larr;
    <button className="" id="javascript">orange lab</button>&larr;
    <button className="" id="html">item lab</button>&larr;
    <button className="" id="javascript">pycharm</button>&larr;
    <button className="" id="sharp">vscode</button>&larr;
    <button className="" id="javascripth">anaconda navigator</button>
    </div><br />
    <center>
    <h1>Languages</h1>
  </center>
  <br />
    <div className="ml-8 mr-8 flex gap-x-8" id="">
    <button className="" id="javascript">html</button>&larr;
    <button className="" id="javascript">css</button>&larr;
    <button className="" id="javascript">javascript</button>&larr;
    <button className="" id="javascript">typescript</button>&larr;
    <button className="" id="javascript">express</button>&larr;
    <button className="" id="javascript">node</button>&larr;
    <button className="" id="javascript">next</button>&larr;
    <button className="" id="javascript">react</button>
    <br /><br />
    <button className="" id="javascript">angular</button>&larr;
    <button className="" id="javascript">python </button>&larr;
    <button className="" id="javascript">chakra</button>&larr;
    <button className="" id="javascript">json</button>&larr;
    <button className="" id="javascript">sass </button>&larr;
    <button className="" id="javascript">java</button>&larr;
    <button className="" id="javascript">solidty</button>
    </div>

  <center>
    <h1>Hosting Platforms</h1>
  </center>
    <br />
    <div className="ml-8 mr-8 flex gap-x-8" id="">
    <button className="" id="javascript">github</button>&larr;
    <button className="" id="javascript">vercel</button>&larr;
    <button className="" id="javascript">heroku</button>&larr;
    <button className="" id="javascripth">python any where</button>&larr;
    <button className="" id="html">netlify</button>&larr;
    <button className="" id="javascript">fire base</button>
    </div><br />

  <center>
    <h1>Database Management System</h1>
  </center>
    <br />
    <div className="ml-8 mr-8 flex gap-x-8" id="">
    <button className="" id="javascript">postgresql</button>&larr;
    <button className="" id="javascript">mysql</button>&larr;
    <button className="" id="javascript">pgadmin 4</button>&larr;
    <button className="" id="javascript">sanity</button>&larr;
    <button className="" id="sharp">content full</button>&larr;
    <button className="" id="javascript">mongodb</button>
    </div><br />
  <center>
    <h1>App Development</h1>
  </center>
    <br />
    <div className="ml-8 mr-8 flex gap-x-8" id="">
    <button className="" id="javascript">expo</button>&larr;
    <button className="" id="javascript">react native</button>&larr;
    <button className="" id="javascript">kolin</button>&larr;
    <button className="" id="javascript">xml</button>&larr;
    <button className="" id="javascript">swift</button>&larr;
    <button className="" id="javascript">C#</button>&larr;
    <button className="" id="javascript">object c</button>&larr;
    <button className="" id="sharp">andriod stuido</button>
    <br /><br />
    <button className="" id="javascript">intellij idea</button>
    </div><br />
  <center>
    <h1>Game Development</h1>
  </center>
    <br />
    <div className="ml-8 mr-8 flex gap-x-8" id="">
    <button className="" id="javascript">core</button>&larr;
    <button className="" id="javascript">unity</button>
</div>
  <center>
    <h1>Softwares</h1>
  </center>
    <br />
    <div className="ml-8 mr-8 flex gap-x-8" id="">
    <button className="" id="javascript">github</button>&larr;
    <button className="" id="javascripth">github desktop</button>&larr;
    <button className="" id="javascript">gui , gi</button>&larr;
    <button className="" id="javascript">git cmd</button>&larr;
    <button className="" id="javascript">vlc</button>&larr;
    <button className="" id="javascript">playit</button>&larr;
    <button className="" id="javascript">git bash</button>&larr;
    <button className="" id="javascript">cmd</button>
    <br /><br />
    <button className="" id="javascript">powershell</button>&larr;
    <button className="" id="javascripth">sublime text editor</button>&larr;
    <button className="" id="javascripth">snip and sketch</button>&larr;
    <button className="" id="javascripth">adobe reader</button>&larr;
    <button className="" id="javascript">whatsapp</button>&larr;
    <button className="" id="javascript">zoom</button>&larr;
    <button className="" id="javascript">discord</button>&larr;
    <button className="" id="javascript">kmplayer</button>
    <br /><br />
    <button className="" id="javascript">IDM</button>&larr;
    <button className="" id="javascripth">safe from net</button>&larr;
    <button className="" id="javascript">zapya</button>&larr;
    <button className="" id="javascript">winrar</button>&larr;
    <button className="" id="javascript">word</button>&larr;
    <button className="" id="javascript">excel</button>&larr;
    <button className="" id="javascript">powerpoint</button>&larr;
    <button className="" id="javascript">outlook</button><br /><br />
    <button className="" id="javascript">access</button>&larr;
    <button className="" id="javascript">publisher</button>&larr;
    <button className="" id="javascript">one note</button>
</div>
<center>
    <h1>Browser</h1>
  </center>
    <br />
    <div className="ml-8 mr-8 flex gap-x-8" id="">
    <button className="" id="javascript">google</button>&larr;
    <button className="" id="javascripth">microsoft edge</button>&larr;
    <button className="" id="javascripth">microsoft store</button>&larr;
    <button className="" id="javascripth">opera browser</button>&larr;
    <button className="" id="javascripth">safe exam browser</button>&larr;
    <button className="" id="javascript">fire fox</button>&larr;
    <button className="" id="javascript">mozilla</button>
    <br /><br />
    </div>
<center>
    <h1>Graphic Designing</h1>
  </center>
    <br />
    <div className="ml-8 mr-8 flex gap-x-8" id="">
    <button className="" id="javascript">adobe</button>&larr;
    <button className="" id="javascripth">adobe photoshop</button>&larr;
    <button className="" id="javascripth">adobe illustrator</button>&larr;
    <button className="" id="javascripth">adobe xd</button>&larr;
    <button className="" id="javascripth">adobe indesign</button>&larr;
    <button className="" id="javascripth">adobe lightroom</button>&larr;
    <button className="" id="csharp">adobe premiere pro</button>&larr;
    <button className="" id="csharp">adobe character animator</button>
    <button className="" id="javascripth">inkscape</button>&larr;
    <button className="" id="javascripth">obs studio</button>&larr;
    <button className="" id="javascripth">vidmore video editor</button>&larr;
    <button className="" id="javascripth">photo tool kit</button>&larr;
    <button className="" id="csharp">easy video to aduio converter</button>&larr;
    <button className="" id="javascripth">hand brake</button>&larr;
    <button className="" id="csharp">adobe creative cloud</button>&larr;
    <button className="" id="javascript">blender</button>
    <button className="" id="javascripth">adobe after effect</button>&larr;
    <button className="" id="javascripth">adobe audition</button>&larr;
    <button className="" id="javascripth">adobe animate</button>&larr;
    <button className="" id="javascripth">adobe aero</button>&larr;
    <button className="" id="javascripth">adobe express</button>&larr;
    <button className="" id="javascripth">adobe incopy</button>&larr;
    <button className="" id="javascripthh">adobe Dreamweaver</button>&larr;
    <button className="" id="csharp">adobe photoshop express</button>
    <button className="" id="javascript">canva</button>
    <br /><br />
    </div>
<center>
    <h1>Api</h1>
  </center>
    <br />
    <div className="ml-8 mr-8 flex gap-x-8" id="">
    <button className="" id="javascripth">serverless api</button>&larr;
    <button className="" id="javascript">rest api</button>&larr;
    <button className="" id="javascript">graphql api</button>
    </div>
  </div>
      <section className="section section-lg section-shaped">
        <form ref={form} onSubmit={sendEmail}>
          {alert && (
            <Alert
              color={alert.color}
              icon={alert.icon}
              message={alert.message}
            />
          )}
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Want to work with me?</h4>
                    <p className="mt-0">
                      Reach out to me using the form below.
                    </p>
                    <FormGroup className={classnames('mt-5', {})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Your name"
                          type="text"
                          name="user_name"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email address"
                          name="user_email"
                          type="email"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className="form-control-alternative"
                        cols="80"
                        name="user_message"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="submit"
                      >
                        Send Message
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </form>
      </section>

    </>
  );
};

export default ContactUs;