import { Col, Container, Row } from "react-bootstrap"
import '../components/TableLayoutFixing.css';


  const TableLayout = (lines) => {

    let content

    if (lines.price_change_percentage_24h > 0 ) {
        content = (
            <Container>
                <Row id='row5' className='bg-success'>
                    <Col>
                        <div className="h2 font-weight-bolder" style={{paddingBottom: '12px', paddingTop: '0px', textAlign: 'center'}}>
                            <span>Upward</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        content = (
            <Container>
                <Row id='row5' className='bg-danger'>
                    <Col>
                        <div className="h2 font-weight-bolder" style={{paddingBottom: '12px', paddingTop: '0px', textAlign: 'center'}}>
                            <span>Downward</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
        
    } 
    return (
        <>
            <div className="card-body p-0">
                <Container>
                    <div className="card-header h3 line-header-title p-0 text-center text-white" style={{backgroundColor: '#2E2EFF'}}><strong>{lines.name}</strong></div>
                            <Row> 
                                <Col>
                                    <div style={{border: '2px solid white', display: 'flex'}}>
                                        <span className="h2 row-1 me-5 ps-3" >Cryptocurrency:</span> 
                                        <div>
                                            <span className="h2 font-weight-bolder row-1" style={{paddingBottom: '12px', textAlign: "right"}}>
                                                <strong>{lines.symbol}</strong>
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            
                                <Col>
                                    <div style={{border: '2px solid white', paddingBottom: '12px'}}>
                                        <span className="h2 row-2 me-5 ps-3 text-left">Price:</span> {' '}
                                        <span className="h2 font-weight-bolder row-2 text-right ms-4" style={{textAlign: 'right'}}>
                                            <strong>{lines.current_price}</strong>
                                        </span>  
                                    </div>
                                </Col>
                            </Row>
                        
                            <Row>
                                <Col>
                                    <div className='' style={{border: '2px solid white', display: 'flex'}}>
                                        <div className="h3 pe-5 me-5 ps-2 text-left">Market Cap:</div>
                                        
                                        <div className="text-right h3 prodActualAti row-3" style={{textAlign: "right"}}>
                                            {lines.market_cap}
                                        </div>
                                        
                                    </div>
                                </Col>
                                <Col>
                                    <div style={{border: '2px solid white', paddingBottom: '12px'}}>
                                        <div style={{textAlign: 'left'}} className="h2 pe-5 me-5 ps-2">Total Volume:</div>
                                        
                                        <div className="h2 font-weight-bolder productionPlanned row-4" style={{paddingBottom: '10px', textAlign: 'center'}}>
                                            <strong>
                                                {lines.total_volume}
                                            </strong>
                                        </div>
                                        
                                    </div>
                                </Col>
                            </Row>
                    
                    
                    <Row>
                        <Col>
                            <div style={{border: '2px solid white', textAlign: 'center'}}>
                                <div className="h2 ps-3">Price Change 24h:</div>
                                <div className="text-left text-white h2 font-weight-bolder" style={{paddingBottom: '12px'}}>
                                    <strong>
                                        {lines.price_change_24h}
                                    </strong>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div style={{border: '2px solid white', textAlign: 'center'}}>
                                <div className="h2 ps-3">Price Percentage 24h:</div>
                                <div className="text-left text-white h2 font-weight-bolder">
                                        {lines.price_change_percentage_24h}%
                                </div>
                            </div>
                        </Col>
                    </Row>
                    
                    {content}
                </Container>
            </div>
        </>
    )
}

export default TableLayout